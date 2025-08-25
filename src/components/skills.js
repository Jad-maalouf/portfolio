import React from "react";
const Skills = () => {
  return (
    <section className="container section">
      <h2>Skills & Expertise</h2>
      <div className="skills-section">
        <div className="frontend card">
          <h3 className="under">Front-End Development</h3>
          <div className="frontend-info">
            <ul className="info">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6+</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Bootstrap & Material UI</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Principles</li>
            </ul>
          </div>
        </div>

        <div className="backend card">
          <h3 className="under">Back-End Development</h3>
          <div className="backend-info">
            <ul className="info">
              <li>ASP .Net core</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MSSQL and PostgreSQL Database</li>
              <li>RESTful API Design</li>
              <li>Swagger Documentation</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
        </div>

        <div className="database card">
          <h3 className="under">Programming Languages</h3>
          <div className="database-info">
            <ul className="info">
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
          </div>
        </div>

        <div className="it card">
          <h3 className="under">Design Patterns</h3>
          <div className="it-info">
            <ul className="info">
              <li>MVC</li>
              <li>Clean architecture</li>
              <li>Modular Monolith</li>
              <li>Repository</li>
              <li>Unit of work</li>
            </ul>
          </div>
        </div>

        <div className="lang card">
          <h3 className="under">Languages</h3>
          <div className="lang-info">
            <ul className="info">
              <li>
                Arabic <em>(Native)</em>
              </li>
              <li>
                English <em>(Professional)</em>
              </li>
              <li>
                French <em>(Conversational)</em>
              </li>
            </ul>
          </div>
        </div>

        <div className="soft card">
          <h3 className="under">Soft Skills</h3>
          <div className="soft-info">
            <ul className="info">
              <li>Effective Communication</li>
              <li>Leadership experience</li>
              <li>Problem Solving</li>
              <li>Critical Thinking</li>
              <li>Adaptability</li>
              <li>Collaboration talent</li>
              <li>Computer Proficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
