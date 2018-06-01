using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Domain;

namespace api.DataLayer.Interfaces
{
  public interface IBaseManager
  {
    Task<IEnumerable<T>> Get<T>() where T : BaseEntity;

    Task<T> Get<T>(Guid id) where T : BaseEntity;

    Task<T> Update<T>(T items) where T : BaseEntity;

    Task<T> Delete<T>(Guid id) where T : BaseEntity;

    Task<T> Add<T>(T item) where T : BaseEntity;
  }
}
