using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineExamWebApi.Models
{
    public partial class Exam
    {
        public int ExamId { get; set; }
        public int? UserId { get; set; }
        public string Subjectid { get; set; }
        public int? Level1Marks { get; set; }
        public int? Level2Marks { get; set; }
        public int? Level3Marks { get; set; }
        public string DateOfExam { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Users User { get; set; }
    }
}
