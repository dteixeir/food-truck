using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using api.Domain;
using api.DataLayer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.DataLayer
{
  public class BaseManager : IBaseManager  {
    private ApplicationDbContext _context;

    public BaseManager(ApplicationDbContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<T>> Get<T>() where T : BaseEntity {
      return await _context.Set<T>().ToListAsync();
    }

    public async Task<T> Get<T>(Guid id) where T : BaseEntity {
      return await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<T> Update<T>(T entity) where T : BaseEntity {
      _context.Set<T>().Update(entity);
      await _context.SaveChangesAsync();
      return entity;
    }

    public async Task<T> Add<T>(T entity) where T : BaseEntity {
      await _context.Set<T>().AddAsync(entity);
      await _context.SaveChangesAsync();
      return entity;
    }
    public async Task<T> Delete<T>(Guid id) where T : BaseEntity {
      var entity = await Get<T>(id);
      _context.Set<T>().Remove(entity);
      await _context.SaveChangesAsync();
      return entity;
    }
  }
}