using System.IO;
using Microsoft.EntityFrameworkCore;

namespace api.Domain
{
  public interface IApplicationDbContext
  {
    DbSet<FoodTruck> FoodTrucks {get; set;}

    DbSet<Menu> Menus {get; set;}
    
    DbSet<MenuItem> MenuItems {get; set;}

    DbSet<ScheduleItem> ScheduleItems {get; set;}

    DbSet<User> Users {get; set;}
  }
}