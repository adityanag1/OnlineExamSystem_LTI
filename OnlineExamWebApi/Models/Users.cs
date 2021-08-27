using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineExamWebApi.Models
{
    public partial class Users
    {
        public Users()
        {
            Exam = new HashSet<Exam>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }
        public string EmailId { get; set; }
        public string Mobile { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Dob { get; set; }
        public string Qualification { get; set; }
        public string YearOfCompletion { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Exam> Exam { get; set; }
    }
}
