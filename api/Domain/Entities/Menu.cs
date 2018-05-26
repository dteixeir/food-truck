using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Domain
{
  public class Menu : BaseEntity
  {
    public string Name {get; set;}

    public Guid FoodTruckId {get; set;}
    [ForeignKey("FoodTruckId")]
    public FoodTruck FoodTruck {get; set;}

    public ICollection<MenuItem> MenuItems {get; set;}
  }
}