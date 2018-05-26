using System.IO;
using Microsoft.EntityFrameworkCore;

namespace api.Domain
{
  public class ApplicationDbContext : DbContext, IApplicationDbContext
  {
    public DbSet<FoodTruck> FoodTrucks {get; set;}

    public DbSet<Menu> Menus {get; set;}
    
    public DbSet<MenuItem> MenuItems {get; set;}

    public DbSet<ScheduleItem> ScheduleItems {get; set;}

    public DbSet<User> Users {get; set;}

    public DbSet<Role> Roles {get; set;}

     public DbSet<UserRole> UserRoles {get; set;}

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { 

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<User>()
        .HasIndex(u => u.Username).IsUnique();

      builder.Entity<User>()
        .HasMany(x => x.UserRoles)
        .WithOne(x => x.User);
    }
  }
}