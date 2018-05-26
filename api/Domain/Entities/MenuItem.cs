using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Domain
{
  public class MenuItem : BaseEntity
  {
    public string Name {get; set;}

    public string Description {get; set;}
    
    public Guid MenuId {get; set;}
    [ForeignKey("MenuId")]
    public Menu Menu {get; set;}

    // Collection of likes (they are good/bad)
  }
}