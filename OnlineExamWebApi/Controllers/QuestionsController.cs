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
    public class QuestionsController : ControllerBase
    {
        private readonly OnlineExamContext _context;

        public QuestionsController(OnlineExamContext context)
        {
            _context = context;
        }

        // GET: api/Questions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestion()
        {
            return await _context.Question.ToListAsync();
        }

        // GET: api/Questions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(string id)
        {
            var question = await _context.Question.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            return question;
        }

        // PUT: api/Questions/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutQuestion(string id, Question question)
        //{
        //    if (id != question.Questionid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(question).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!QuestionExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Questions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Question>> PostQuestion(Question[] question)
        //{
        //    //Subject subject = new Subject();

        //    //Console.WriteLine(question);
        //    // Console.WriteLine(subjectName);

        //    //var log = _context.Question.Where(x => x.Subject.Equals(subject.SubjectName)).FirstOrDefault();


        //    for (int i = 0; i < question.Length; i++)
        //    {

        //        //question[i].Subjectid = log.Subjectid;
        //        _context.Question.Add(question[i]);
        //        try
        //        {
        //            await _context.SaveChangesAsync();
        //        }

        //        catch (DbUpdateException)
        //        {
        //            if (QuestionExists(question[i].Questionid))
        //            {
        //                return Conflict();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //    }
        //    return CreatedAtAction("GetQuestion", question);
        //}


        // DELETE: api/Questions/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Question>> DeleteQuestion(string id)
        //{
        //    var question = await _context.Question.FindAsync(id);
        //    if (question == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Question.Remove(question);
        //    await _context.SaveChangesAsync();

        //    return question;
        //}

        [HttpDelete("{subjectName}")]
        public IActionResult DeleteQuestion(string subjectName)
        {
            var id = _context.Subject.Where(x => x.SubjectName == subjectName).SingleOrDefault()?.Subjectid.ToString();

            if (id != null)
            {
                _context.Question.Where(x => x.Subjectid == id).ToList().ForEach(_context.Question.SingleDelete);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        // POST: api/Questions
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Question>> PostQuestion(Question[] question)
        {
            for (int i = 0; i < question.Length; i++)
            {
                _context.Question.Add(question[i]);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (QuestionExists(question[i].Questionid))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return CreatedAtAction("GetQuestion", question);
        }

        private bool QuestionExists(int id)
        {
            return _context.Question.Any(e => e.Questionid == id);
        }
    }
}
