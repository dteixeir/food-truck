using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;
using api.Domain.Interfaces;
using System.Collections.Generic;

namespace api.Domain
{
  public class User : BaseEntity, IBaseEntity
  {
    public string FirstName {get; set;}

    public string LastName {get; set;}

    public string FullName {get; set;}

    public string Email {get; set;}

    public string Username {get; set;}

    public string Password {get; set;}

    public ICollection<UserRole> UserRoles { get; set; } 
  }
}