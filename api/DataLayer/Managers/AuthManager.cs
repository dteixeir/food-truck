using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using api.Domain;
using api.DataLayer.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Threading.Tasks;

namespace api.DataLayer
{
  using BCrypt = BCrypt.Net.BCrypt;
  public class AuthManager : IAuthManager  {
    private ApplicationDbContext _context;
    private IConfiguration _config;

    public AuthManager(ApplicationDbContext context, IConfiguration config)
    {
      _context = context;
      _config = config;
    }

    public async Task<string> Authenticate(string username, string password) {
      User user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

      if(user == null ){
        throw new Exception("Invalid credentials");
      }

      return BCrypt.Verify(password, user?.Password) ? BuildToken(user) : null;
    }

    public async Task<User> Put(User entity) {
      _context.Users.Update(entity);
      await _context.SaveChangesAsync();
      return entity;
    }

    public async Task<User> Register(User entity) {
      if(await _context.Users.AnyAsync(x => x.Username == entity.Username)) {
        throw new Exception("Username is taken, please choose another one.");
      }

      entity.Id = Guid.NewGuid();
      entity.Password = BCrypt.HashPassword(entity.Password);
      entity.CreateDateTime = DateTime.UtcNow;
      entity.IsActive = true;
      entity.IsDeleted = false;
      entity.CreateUserId = entity.Id;

      _context.Users.Add(entity);
      _context.SaveChanges();
      return entity;
    }

    private string BuildToken(User user)
    {
      // TODO: Build this out to fetch user infor from db based upon role

      var claims = new[] {
        new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName),
        new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
        new Claim(JwtRegisteredClaimNames.Email, user.Email),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim("User_Id", user.Id.ToString()),
        new Claim("User_Email", user.Email),
        new Claim("Role", "Admin")
      };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(_config["Jwt:Issuer"],
        _config["Jwt:Issuer"],
        claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: creds);

      return new JwtSecurityTokenHandler().WriteToken(token);
     }

     private string EncryptPassword(string password) {
      // generate a 128-bit salt using a secure PRNG
      byte[] salt = new byte[128 / 8];
      using (var rng = RandomNumberGenerator.Create())
      {
        rng.GetBytes(salt);
      }
 
      // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
      string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
        password: password,
        salt: salt,
        prf: KeyDerivationPrf.HMACSHA256,
        iterationCount: 10000,
        numBytesRequested: 256 / 8));

      Console.WriteLine($"Hashed: {hashed}");

      return hashed;
    }
  }
}