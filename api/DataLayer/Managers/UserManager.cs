using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using api.Domain;
using api.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.DataLayer
{
  public class UserManager : IUserManager  {
    private ApplicationDbContext _context;

    public UserManager(ApplicationDbContext context)
    {
      _context = context;
    }

    public async Task<List<Role>> GetRoles(User user) 
    {
        var roles = await _context.UserRoles.Where(u => u.UserId == user.Id).Select(x => x.Role).ToListAsync();
        return roles;
    }

    public async Task<User> GetUser(string username) 
    {
        var roles = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        return roles;
    }
  }
}