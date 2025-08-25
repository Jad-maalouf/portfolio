import React from "react";
import profile from "../images/pic.jpeg";

const Personnal = () => {
  return (
    <section className="container section">
      <div className="personnal-section">
        <div>
          <img src={profile} alt="Jad ALMaalouf Profile" className="profile" />
        </div>
        <div className="informations">
          <h2>About Me</h2>
          <p>
            Passionate Full Stack Software Engineer with expertise in modern web
            technologies and strong problem-solving abilities.
          </p>

          <div className="line">
            <span className="info-labels">Name:</span>
            <span className="text">
              <strong>Jad AlMaalouf</strong>
            </span>
          </div>

          <div className="line">
            <span className="info-labels">Email:</span>
            <div className="text">
              <div>
                <a href="mailto:almaaloufjad@gmail.com" className="mails">
                  almaaloufjad@gmail.com, &nbsp;
                </a>
                <a href="mailto:jad12maalouf@gmail.com" className="mails">
                  jad12maalouf@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="line">
            <span className="info-labels">Phone:</span>
            <span className="text">+961-71-804182</span>
          </div>

          <div className="line">
            <span className="info-labels">Location:</span>
            <span className="text">
              Dekwaneh-MarRoukouz Lebanon, Jezzine South Lebanon
            </span>
          </div>

          <div className="line">
            <span className="info-labels">Born:</span>
            <span className="text">October 23rd, 1995</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personnal;
