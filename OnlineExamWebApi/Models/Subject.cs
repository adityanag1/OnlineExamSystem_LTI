using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineExamWebApi.Models
{
    public partial class Subject
    {
        public Subject()
        {
            Exam = new HashSet<Exam>();
            Question = new HashSet<Question>();
        }

        public string Subjectid { get; set; }
        public string SubjectName { get; set; }
        public string ExamDuration { get; set; }

        public virtual ICollection<Exam> Exam { get; set; }
        public virtual ICollection<Question> Question { get; set; }
    }
}
