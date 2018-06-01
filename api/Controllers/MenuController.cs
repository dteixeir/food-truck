using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using api.DataLayer;
using api.DataLayer.Interfaces;
using api.Domain;

namespace api.Controllers
{

  [Route("api/[controller]/")]
  public class MenuController : Controller
  {
    internal IBaseManager _manager;

    public MenuController(IBaseManager manager)
    {
      _manager = manager;
    }

    // GET api/values
    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var result = _manager.Get<Menu>();
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public IActionResult Get(Guid id)
    {
      try
      {
        var result = _manager.Get<Menu>(id);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // POST api/values
    [HttpPost]
    public IActionResult Post([FromBody]Menu entity)
    {
      try
      {
        var result = _manager.Add<Menu>(entity);
        return Created($"{Url.RouteUrl(RouteData.Values)}/{entity.Id}", entity);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // PUT api/values/5
    [HttpPut]
    public IActionResult Put([FromBody]Menu entity)
    {
      try
      {
        var result = _manager.Update<Menu>(entity);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
      try
      {
        var result = _manager.Delete<Menu>(id);
        return NoContent();
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }
  }
}
