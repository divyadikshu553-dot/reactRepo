import React from 'react'

const Projects = () => {
  return (
    <div className="pro">
      <div className="proContent">
        <h1>Our Projects</h1>
       <p> Here you can showcase your best work. Each project should include a brief description, the technologies<br></br> used, and any notable achievements. This helps potential clients or employers understand your<br></br> capabilities.</p>
    </div>
    <div className="cardContainer">
    <div className="card" style={{ width: "18rem" }}>
  <img src="https://themewagon.github.io/multiplepage-portfolio/assets/images/projects/project1.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Project One</h5>
    <p className="card-text">A brief Description of yor first project....</p>
    
  </div>
</div>
 <div className="card" style={{ width: "18rem" }}>
  <img src="https://themewagon.github.io/multiplepage-portfolio/assets/images/projects/project2.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Project Two</h5>
    <p className="card-text">Describe of your second project....</p>
   
  </div>
</div>
 <div className="card" style={{ width: "18rem" }}>
  <img src="https://themewagon.github.io/multiplepage-portfolio/assets/images/projects/project3.png" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Project Three</h5>
    <p className="card-text">Share details about your third project...</p>
 
  </div>
</div>
</div>
    </div>
  )
}

export default Projects