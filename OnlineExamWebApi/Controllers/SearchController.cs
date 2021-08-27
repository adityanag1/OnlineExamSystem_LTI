using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineExamWebApi.Models;

namespace OnlineExamWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly OnlineExamContext _context;

        public SearchController(OnlineExamContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Getsp_Search_User_Details([FromQuery(Name = "technology")] string technology, [FromQuery(Name = "state")] string state, [FromQuery(Name = "city")] string city)
        {
            var query = (from u in _context.Users
                         join r in _context.Exam
                         on u.UserId equals r.UserId
                         join t in _context.Subject
                         on r.Subjectid equals t.Subjectid
                         where t.SubjectName == technology && u.State == state && u.City == city
                         select new { u.Name, u.EmailId, u.Mobile, u.State, u.City }).ToList();

            if (query != null)
            {
                return Ok(query);
            }
            else
            {
                //return NotFound(" No Employee data found !!!");
                return Ok("No data found !!!");
            }
        }


        [Route("Technology")]
        [HttpGet]
        public IActionResult GetTechnology()
        {
            var tech = (from t in _context.Subject
                        select t.SubjectName).ToList();
            return Ok(tech);
        }

        /*
        [Route("Level")]
        [HttpGet]
        public IActionResult GetLevel()
        {
            var level = (from l in db.TblLevels
                         orderby l.LevelNumber
                         select l.LevelNumber).ToList();
            return Ok(level);
        }
        */

        [Route("State")]
        [HttpGet]
        public IActionResult GetState()
        {
            var state = (from u in _context.Users
                         select u.State).Distinct().ToList();
            return Ok(state);
        }


        [Route("state/{state}")]
        [HttpGet]
        public IActionResult GetCity(string state)
        {
            var city = (from u in _context.Users
                        where u.State == state
                        select u.City).Distinct().ToList();
            return Ok(city);
        }
    }
}
