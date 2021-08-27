using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnlineExamWebApi.Models
{
    public partial class OnlineExamContext : DbContext
    {
        public OnlineExamContext()
        {
        }

        public OnlineExamContext(DbContextOptions<OnlineExamContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Exam> Exam { get; set; }
        public virtual DbSet<Question> Question { get; set; }
        public virtual DbSet<Subject> Subject { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAPTOP-RKH29FN7;Database=OnlineExam;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Loginid)
                    .HasName("PK__admin__1F5DF0A71849AC04");

                entity.ToTable("admin");

                entity.Property(e => e.Loginid)
                    .HasColumnName("loginid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Exam>(entity =>
            {
                entity.ToTable("exam");

                entity.Property(e => e.ExamId).HasColumnName("examID");

                entity.Property(e => e.DateOfExam)
                    .IsRequired()
                    .HasColumnName("dateOfExam")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Level1Marks).HasColumnName("level1Marks");

                entity.Property(e => e.Level2Marks).HasColumnName("level2Marks");

                entity.Property(e => e.Level3Marks).HasColumnName("level3Marks");

                entity.Property(e => e.Subjectid)
                    .HasColumnName("subjectid")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Exam)
                    .HasForeignKey(d => d.Subjectid)
                    .HasConstraintName("FK__exam__subjectid__35BCFE0A");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Exam)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__exam__userID__34C8D9D1");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("question");

                entity.Property(e => e.Questionid).HasColumnName("questionid");

                entity.Property(e => e.CorrectAnswer)
                    .HasColumnName("correctAnswer")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Option1)
                    .IsRequired()
                    .HasColumnName("option1")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Option2)
                    .IsRequired()
                    .HasColumnName("option2")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Option3)
                    .HasColumnName("option3")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Option4)
                    .HasColumnName("option4")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.QuestionDesc)
                    .IsRequired()
                    .HasColumnName("questionDesc")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.QuestionLevel)
                    .HasColumnName("questionLevel")
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                entity.Property(e => e.Subjectid)
                    .HasColumnName("subjectid")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Question)
                    .HasForeignKey(d => d.Subjectid)
                    .HasConstraintName("FK__question__subjec__4316F928");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.ToTable("subject");

                entity.Property(e => e.Subjectid)
                    .HasColumnName("subjectid")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ExamDuration)
                    .HasColumnName("examDuration")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubjectName)
                    .IsRequired()
                    .HasColumnName("subjectName")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__users__CB9A1CFFA657FD97");

                entity.ToTable("users");

                entity.HasIndex(e => e.EmailId)
                    .HasName("UQ__users__87355E738B49E3C6")
                    .IsUnique();

                entity.HasIndex(e => e.Mobile)
                    .HasName("UQ__users__A32E2E1C22E13036")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasColumnName("city")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .IsRequired()
                    .HasColumnName("dob")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("emailId")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .IsRequired()
                    .HasColumnName("mobile")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Qualification)
                    .IsRequired()
                    .HasColumnName("qualification")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasColumnName("state")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.YearOfCompletion)
                    .IsRequired()
                    .HasColumnName("yearOfCompletion")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
