using System;
using System.Collections.Generic;
using api.Domain;

namespace api.DataLayer.Interfaces
{
  public interface IBaseManager
  {
    IEnumerable<T> Get<T>() where T : BaseEntity;

    T Get<T>(Guid id) where T : BaseEntity;

    T Put<T>(T items) where T : BaseEntity;

    T Delete<T>(Guid id) where T : BaseEntity;

    T Post<T>(T item) where T : BaseEntity;
  }
}
