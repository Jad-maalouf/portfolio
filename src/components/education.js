import React from "react";

const Education = () => {
  return (
    <section className="container section">
      <h2>Education</h2>
      <div className="education-grid">
        <div className="university card">
          <h3 className="uni">Antonine University</h3>
          <p className="uni-info">
            <strong>
              Master's Degree in Telecommunication and Information Engineering
            </strong>
            <br />
            Antonine University – Baabda
            <br />
          </p>
          <span className="badge">Master's Degree</span>
        </div>

        <div className="school card">
          <h3 className="uni uni2">Jezzine Official High School</h3>
          <p className="uni-info">
            <strong>Lebanese Baccalaureate Part II</strong>
            <br />
            General Sciences Track
          </p>
          <span className="badge">High School Diploma</span>
        </div>
        <div className="school card">
          <h3 className="uni uni2">Official Certifications</h3>
          <p className="uni-info">
            <br />
            Microsoft Azure az-900
            <br />
            Microsoft 365 Messaging Administrator Associate
            <br />
            Plenty of online course certificates
          </p>
          <span className="badge">Microsoft</span>
          <span className="badge">Udemy</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
