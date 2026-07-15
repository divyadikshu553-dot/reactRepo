import React from "react";

const Home = () => {
  return (
    <div className="back2">

      <div className="homeSection">

        <div className="homeContent">
          <h1>Hello I'm your name</h1>

          <p className="home">
            A passionate frontend developer with a keen eye
            <br />
            for design and a love for creating beautiful,
            <br />
            functional web experiences.
          </p>

          <div className="btnBox">
            <button className="btn1">View About <i className="fa-solid fa-arrow-right"></i></button>
            <button className="btn2">Read Posts <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <div className="homeImage">
          <img
            src="https://www.freeiconspng.com/uploads/white-spider-web-png-9.png"
            // src="https://themewagon.github.io/multiplepage-portfolio/assets/images/tech-background.svg"
            // style={{ width: "350px", border: "2px solid red" }}

            className="image2"
            alt="background"
          />
        </div>

      </div>

    </div>
  );
};

export default Home;