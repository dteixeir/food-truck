using api.Migrations.MigrationLoader;
using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class sd1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sqlScript = MigrationLoader.MigrationExtensions.GetScriptContent("sd1.sql", MigrationExtensions.MigrationScriptType.DataUpdate);
            migrationBuilder.Sql(sqlScript);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
