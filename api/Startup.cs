using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using api.Domain;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using api.DataLayer.Interfaces;
using api.DataLayer;

namespace api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Console.WriteLine(configuration);
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
          // add policies
          services.AddCors(policy => 
            policy.AddPolicy("CorsPolicy", builder => 
              builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials())
          );

          // policies can also be based off of roles so this is not needed but this is how and where it would be added
          // services.AddAuthorization(options =>
          // {
          //   options.AddPolicy("AdminOnly", policy => policy.RequireClaim("Admin"));
          // });

          services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
              options.TokenValidationParameters = new TokenValidationParameters
              {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = Configuration["Jwt:Issuer"],
                ValidAudience = Configuration["Jwt:Issuer"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
              };
            });

          services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")))
          .AddCors(o => o.AddPolicy("AllowAllHeaders", builder =>
          {
              builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
          }))
          .AddMvc()
          .AddJsonOptions(options =>
          {
              options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
              options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
          });

          // add dependencies
          services.AddTransient<IAuthManager, AuthManager>();
          services.AddTransient<IBaseManager, BaseManager>();
          services.AddTransient<IUserManager, UserManager>();
          services.AddTransient<IApplicationDbContext, ApplicationDbContext>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
          app.UseCors("CorsPolicy");
          app.UseAuthentication();
          if (env.IsDevelopment())
          {
              app.UseDeveloperExceptionPage();
          }
          
          app.UseMvc();
        }
    }
}
