using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Domain;

namespace api.DataLayer.Interfaces
{
  public interface IUserManager
  {
    Task<List<Role>> GetRoles(User user);
    Task<User> GetUser(string username);
  }
}
