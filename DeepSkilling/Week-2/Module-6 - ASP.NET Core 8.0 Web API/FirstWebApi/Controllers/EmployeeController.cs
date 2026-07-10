using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;
using FirstWebApi.Filters;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("Emp")]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            throw new Exception("Custom Exception from Employee GET");
        }

        [HttpGet("standard")]
        public ActionResult<Employee> GetStandard()
        {
            return GetStandardEmployeeList()[0];
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            return Ok(employee);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            return Ok(employee);
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
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
                        new Skill
                        {
                            Id = 1,
                            Name = "C#"
                        },
                        new Skill
                        {
                            Id = 2,
                            Name = ".NET"
                        }
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
                        new Skill
                        {
                            Id = 3,
                            Name = "Communication"
                        }
                    }
                }
            };
        }
    }
}