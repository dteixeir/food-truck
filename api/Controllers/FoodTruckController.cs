using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using api.DataLayer;
using api.DataLayer.Interfaces;
using api.Domain;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace api.Controllers
{
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [Route("api/[controller]/")]
  public class FoodTruckController : Controller
  {
    internal IBaseManager _manager;

    public FoodTruckController(IBaseManager baseManager)
    {
      _manager = baseManager;
    }

    // GET api/FoodTruck/
    [HttpGet, Authorize]
    public async Task<IActionResult> Get()
    {
      try 
      {
        var result = await _manager.Get<FoodTruck>();
        return Ok(result);
      } 
      catch(Exception error) {
        return BadRequest(error);
      }
    }

    // GET api/FoodTruck/5
    [HttpGet("{id}"), Authorize]
    public async Task<IActionResult> Get(Guid id)
    {
      try 
      {
        var result = await _manager.Get<FoodTruck>(id);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
      
    }

    // POST api/FoodTruck
    [HttpPost, Authorize]
    public async Task<IActionResult> Post([FromBody]FoodTruck entity)
    {
      try
      {
        // TODO MOVE!!!!

        var currentUser = HttpContext.User;
        // var user = currentUser.Claims.Select(c => new {type=c.Type,value=c.Value}).ToList();
        var userId = currentUser.Claims.FirstOrDefault(c => c.Type == "User_Id")?.Value;
        entity.CreateUserId = (new Guid(userId));
        entity.CreateDateTime = DateTime.UtcNow;
        var result = await _manager.Add<FoodTruck>(entity);

        return Created($"{Url.RouteUrl(RouteData.Values)}/{entity.Id}", entity);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // PUT api/FoodTruck/5
    [HttpPut, Authorize]
    public async Task<IActionResult> Put([FromBody]FoodTruck entity)
    {
      try
      {
        var result = await _manager.Update<FoodTruck>(entity);
        return Ok(result);
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }

    // DELETE api/FoodTruck/5
    [HttpDelete("{id}"), Authorize]
    public async Task<IActionResult> Delete(Guid id)
    {
      try
      {
        var result = await _manager.Delete<FoodTruck>(id);
        return NoContent();
      }
      catch(Exception error) 
      {
        return BadRequest(error);
      }
    }
  }
}
