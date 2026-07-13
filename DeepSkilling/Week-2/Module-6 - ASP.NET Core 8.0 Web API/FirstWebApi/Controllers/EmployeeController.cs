using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;
using FirstWebApi.Filters;
using System.Linq;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("Emp")]
    
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "Ravi",
                Salary = 50000,
                Permanent = true,
                DateOfBirth = new DateTime(2000,1,15),
                Department = new Department
                {
                    Id = 1,
                    Name = "IT"
                },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "C#" },
                    new Skill { Id = 2, Name = ".NET" }
                }
            },

            new Employee
            {
                Id = 2,
                Name = "Priya",
                Salary = 60000,
                Permanent = false,
                DateOfBirth = new DateTime(1999,5,20),
                Department = new Department
                {
                    Id = 2,
                    Name = "HR"
                },
                Skills = new List<Skill>
                {
                    new Skill { Id = 3, Name = "Communication" }
                }
            }
        };

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        [HttpGet("standard")]
        public ActionResult<Employee> GetStandard()
        {
            return Ok(employees.First());
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut]
        public ActionResult<Employee> Put([FromBody] Employee employee)
        {
            if (employee.Id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existingEmployee = employees.FirstOrDefault(e => e.Id == employee.Id);

            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            existingEmployee.Name = employee.Name;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.Permanent = employee.Permanent;
            existingEmployee.Department = employee.Department;
            existingEmployee.Skills = employee.Skills;
            existingEmployee.DateOfBirth = employee.DateOfBirth;

            return Ok(existingEmployee);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            employees.Remove(employee);

            return Ok("Employee deleted successfully");
        }
    }
}