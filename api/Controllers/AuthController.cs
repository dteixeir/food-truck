using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using api.DataLayer.Interfaces;
using api.Domain;
using api.DataLayer;
using System.Threading.Tasks;

namespace api.Controllers
{
  [Route("api/[controller]/[action]/")]
  public class AuthController : Controller
  {
    internal IAuthManager _authManager;

    public AuthController(IAuthManager authManager)
    {
      _authManager = authManager;
    }

    [HttpPost, AllowAnonymous]
    public async Task<IActionResult> Authenticate([FromBody] LoginModelDto login)
    {
      try {
        if (login == null || String.IsNullOrEmpty(login.Username) || String.IsNullOrEmpty(login.Password))
        {
          throw new Exception("Invalid credentials");
        }

        string token = await _authManager.Authenticate(login.Username, login.Password);

        return String.IsNullOrEmpty(token) ? (IActionResult) Unauthorized() : Ok(new { token });
      } catch(Exception error) {
        return BadRequest(error);
      }
    }

    [HttpPost, AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] User user)
    {
      try {
        var token = await _authManager.Register(user);
        return token == null ? (IActionResult) Unauthorized() : Ok(new { token });
      } catch(Exception error) {
        Console.WriteLine(error);
        return BadRequest("Registration Failed.");
      }
    }

    public class LoginModelDto
    {
      public string Username { get; set; }
      public string Password { get; set; }
    }
  }
}