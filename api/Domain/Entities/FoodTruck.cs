using System;
using System.Collections.Generic;

namespace api.Domain
{
  public class FoodTruck : BaseEntity
  {
    public string Name {get; set;}

    public string Description {get; set;}

    public string WebsiteUrl {get; set;}

    public string ImageUrl {get; set;}

    public ICollection<Menu> Menus {get; set;}

    public ICollection<ScheduleItem> ScheduleItems {get; set;}
  }
}