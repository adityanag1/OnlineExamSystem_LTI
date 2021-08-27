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
    public class SubjectsController : ControllerBase
    {
        private readonly OnlineExamContext _context;

        public SubjectsController(OnlineExamContext context)
        {
            _context = context;
        }

        // GET: api/Subjects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subject>>> GetSubject()
        {
            return await _context.Subject.ToListAsync();
        }

        [Route("/GetSubjectById")]
        [HttpGet]
        public async Task<ActionResult<Subject>> GetSubject(string id)
        {
            var subject = await _context.Subject.FindAsync(id);

            if (subject == null)
            {
                return NotFound();
            }

            return subject;
        }

        // PUT: api/Subjects/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubject(string id, Subject subject)
        {
            if (id != subject.Subjectid)
            {
                return BadRequest();
            }

            _context.Entry(subject).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Subjects
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Subject>> PostSubject(Subject subject)
        {
            _context.Subject.Add(subject);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SubjectExists(subject.Subjectid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSubject", new { id = subject.Subjectid }, subject);
        }

        // DELETE: api/Subjects/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Subject>> DeleteSubject(string id)
        {
            var subject = await _context.Subject.FindAsync(id);
            if (subject == null)
            {
                return NotFound();
            }

            _context.Subject.Remove(subject);
            await _context.SaveChangesAsync();

            return subject;
        }

        private bool SubjectExists(string id)
        {
            return _context.Subject.Any(e => e.Subjectid == id);
        }
        // GET: api/Subjects/Java
        [HttpGet("{name}")]
        [Route("api/[controller]/name")]
        public string GetSubjectIdByName(string name)
        {
            Console.WriteLine(name);
            string id = _context.Subject.Where(x => x.SubjectName == name).SingleOrDefault()?.Subjectid.ToString();

            //var id = _context.Subject.Where(op => op.SubjectName == name).Select(op => op.Subjectid).ToString();

            if (id == null)
            {
                return "Not Found";
            }

            return id;
        }
    }
}
