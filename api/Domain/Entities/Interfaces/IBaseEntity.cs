using System;

namespace api.Domain.Interfaces
{
  public interface IBaseEntity {
      Guid Id {get; set;}

      DateTime CreateDateTime {get; set;}

      Guid CreateUserId {get; set;}

      DateTime? UpdateDateTime {get; set;}

      Guid? UpdateUserId {get; set;}

      bool IsActive { get; set; }

      bool IsDeleted { get; set; }
    }
}