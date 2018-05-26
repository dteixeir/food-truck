using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Domain
{
  public class ScheduleItem : BaseEntity
  {
    public DateTime StartDateTime {get; set;}

    public DateTime EndDateTime {get; set;}

    public Guid FoodTruckId {get; set;}
    [ForeignKey("FoodTruckId")]
    public FoodTruck FoodTruck {get; set;}

    // public Guid LocationId {get; set;}
    // [ForeignKey("LocationId")]
    // public Location Location {get; set;}
  }
}