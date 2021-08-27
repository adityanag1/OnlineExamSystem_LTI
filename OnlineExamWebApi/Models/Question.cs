using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineExamWebApi.Models
{
    public partial class Question
    {
        public int Questionid { get; set; }
        public string QuestionDesc { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public string CorrectAnswer { get; set; }
        public string QuestionLevel { get; set; }
        public string Subjectid { get; set; }

        public virtual Subject Subject { get; set; }
    }
}
