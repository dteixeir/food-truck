using System;
using System.Collections.Generic;

namespace api.Domain
{
  public class Role : BaseEntity
  {
    public string Name { get; set; }
    public string Description { get; set; }
    public ICollection<UserRole> UserRoles { get; set; } 
  }
}