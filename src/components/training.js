import React from "react";
const Training = () => {
  return (
    <section className="container section">
      <h2>Professional Experience</h2>
      <div className="square">
        <div className="company card">
          <h3 className="company-name">Code Technologies</h3>
          <div className="description">
            <p>
              <strong>Software Engineering Department</strong> • February 2022 -
              Present
            </p>
            <h4>Key Responsibilities:</h4>
            <ul className="tasks-list">
              <li>
                Development of end-to-end web applications with a strong
                emphasis on clean, scalable backend architecture and responsive
                frontend interfaces
              </li>
              <li>Specialize in building RESTful APIs</li>
              <li>Develop modern, interactive UIs</li>
              <li>Build automated internal processes through custom scripts</li>
              <li>
                Integrate intelligent features using AI and machine learning
                technologies
              </li>
              <li>
                Design interactive BI dashboards to support data-driven
                decision-making across diverse industries
              </li>
            </ul>
            <div className="tech-stack">
              <span className="badge">.NET</span>
              <span className="badge">C#</span>
              <span className="badge">React & TypeScript</span>
              <span className="badge">Python</span>
              <span className="badge">Power BI</span>
            </div>
          </div>
        </div>

        {/* <div className="company card">
          <h3 className="company-name">Continuous Learning & Development</h3>
          <div className="description">
            <p>
              <strong>Self-Directed Learning</strong> • Ongoing
            </p>
            <h4>Learning Platforms & Projects:</h4>
            <ul className="tasks-list">
              <li>
                Advanced web development through professional platforms
                including{" "}
                <a
                  href="https://codewithmosh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code with Mosh
                </a>
                ,{" "}
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freeCodeCamp
                </a>
                , and{" "}
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  W3Schools
                </a>
              </li>
              <li>
                Developed full-stack web applications featuring authentication
                systems and e-commerce functionality using React.js, Express.js,
                and MySQL
              </li>
              <li>
                Created interactive desktop applications including a number
                guessing game using Python's Tkinter framework
              </li>
            </ul>
            <div className="tech-stack">
              <span className="badge">React.js</span>
              <span className="badge">Express.js</span>
              <span className="badge">MySQL</span>
              <span className="badge">Python</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Training;
