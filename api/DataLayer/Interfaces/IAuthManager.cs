using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Domain;

namespace api.DataLayer.Interfaces
{
  public interface IAuthManager
  {
    Task<string> Authenticate(string username, string password);

    Task<User> Put(User items);

    Task<User> Register(User item);
  }
}
