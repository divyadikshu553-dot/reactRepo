import React from "react";

const About = () => {
  return (
    <div className="back1">
      <div className="aboutContent">
        <div>
          <h1 className="about">About Me</h1>

          <p className="para">
            This is where you can introduce yourself or your
            <br />
            company. Share your story, mission, and values.
            <br />
            Explain what makes you unique and why people
            <br />
            should be interested in your work. Keep it concise
            <br />
            but engaging.
          </p>
        </div>

        <img
          src="https://themewagon.github.io/multiplepage-portfolio/assets/images/about/coder.jpg"
          className="img"
          alt="coder"
        />
      </div>
      <div className="button">
        <button className="b1">Next.js</button>
        <button className="b1">React</button>
        <button className="b1">TypeScript</button>
        <button className="b1">Tailwind CSS</button>

        <button className="b1">Node.js</button>
        <button className="b1">Docker</button>
        <button className="b1">Git</button>
        <button className="b1">AWS</button>
      </div>

      <div className="bottomSection">
        <div className="leftSide">
          <h1 className="ex">Experience</h1>

          <h5 className="txt">Senior Frontend Developer</h5>
          <h6 className="small">
            Tencent Cloud
            <br />
            Leading frontend development for EdgeOne platform and templates.
          </h6>

          <h5 className="txt">Frontend Developer</h5>
          <h6 className="small">
            Tencent Cloud
            <br />
            Developed and maintained multiple web applications and tools.
          </h6>

          <h5 className="txt">Junior Developer</h5>
          <h6 className="small">
            Tencent Cloud
            <br />
            Worked on various client projects and internal tools.
          </h6>
        </div>

        <div className="rightSide">
          <h1 className="connect">Let's Connect</h1>
          <p className="para2">
            Feel free to reach out if you want to collaborate or just say hi!
            You can find us on social media or drop us a email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
