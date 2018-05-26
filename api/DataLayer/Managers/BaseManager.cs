using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using api.Domain;
using api.DataLayer.Interfaces;

namespace api.DataLayer
{
  public class BaseManager : IBaseManager  {
    private ApplicationDbContext _context;

    public BaseManager(ApplicationDbContext context)
    {
      _context = context;
    }

    public IEnumerable<T> Get<T>() where T : BaseEntity {
      return _context.Set<T>();
    }

    public T Get<T>(Guid id) where T : BaseEntity {
      return _context.Set<T>().FirstOrDefault(x => x.Id == id);
    }

    public T Put<T>(T entity) where T : BaseEntity {
      _context.Set<T>().Update(entity);
      _context.SaveChanges();
      return entity;
    }

    public T Post<T>(T entity) where T : BaseEntity {
      _context.Set<T>().Add(entity);
      _context.SaveChanges();
      return entity;
    }
    public T Delete<T>(Guid id) where T : BaseEntity {
      var entity = Get<T>(id);
      _context.Set<T>().Remove(entity);
      _context.SaveChanges();
      return entity;
    }
  }
}