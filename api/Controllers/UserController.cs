using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using api.DataLayer;
using api.DataLayer.Interfaces;
using api.Domain;
using Microsoft.AspNetCore.Authorization;

namespace api.Controllers
{

  [Route("api/[controller]/")]
  public class UserController : Controller
  {
    internal IBaseManager _manager;

    public UserController(IBaseManager _baseManager)
    {
      _manager = _baseManager;
    }

    // GET api/values
    [HttpGet, Authorize]
    public IActionResult Get()
    {
      try
      {
        var result = _manager.Get<User>();
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // GET api/values/5
    [HttpGet("{id}"), Authorize]
    public IActionResult Get(Guid id)
    {
      try
      {
        var result = _manager.Get<User>(id);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // POST api/values
    [HttpPost, Authorize]
    public IActionResult Post([FromBody]User entity)
    {
      try
      {
        var result = _manager.Post<User>(entity);
        return Created($"{Url.RouteUrl(RouteData.Values)}/{entity.Id}", entity);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // PUT api/values/5
    [HttpPut, Authorize]
    public IActionResult Put([FromBody]User entity)
    {
      try
      {
        var result = _manager.Put<User>(entity);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // DELETE api/values/5
    [HttpDelete("{id}"), Authorize]
    public IActionResult Delete(Guid id)
    {
      try
      {
        var result = _manager.Delete<User>(id);
        return NoContent();
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }
  }
}
