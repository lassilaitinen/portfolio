import './Projects.css';

// Import images
import cupdrought from '../images/cupdrought.png';
import ohj2 from '../images/havaintopk.png';
import ohj1 from '../images/seikkailija.png';
import secureapp from '../images/secureapp.png';

const Projects = () => {
    return (
      <div id='projects-container'>
        <h1>My Projects</h1>

        <div id="project-card">
          <img src={cupdrought} alt="CupDrought" />
          <div id="project-info">
          <h2>CupDrought</h2>
          <p>
            This is a project to count the teams' time since winning the last championship.
            The project is made with React and self-made json database.
          </p><br />
          <p>Technologies:<strong> React, json, JavaScript </strong></p><br />
          <a href="https://github.com/lassilaitinen/CupDrought">View project code</a>
          </div>
        </div>

        <div id="project-card">
          <img src={secureapp} alt="CupDrought" />
          <div id="project-info">
          <h2>Secure App</h2>
          <p>
            Project for the MOOC Cyber Security Base -course. 
            This is a simple app where you can post noticed security threats, comment the notices and vote if the notice was good or not. 
            It has some built in security flaws in it, which was goal for this project among noticing the security flaws.
          </p><br />
          <p>Technologies:<strong> Python, Django</strong></p><br />
          <a href="https://github.com/lassilaitinen/CSB-project1">View project code</a>
          </div>
        </div>

        <div id="project-card">
          <img src={ohj2} alt="CupDrought" />
          <div id="project-info">
          <h2>Observation Register</h2>
          <p>
            Course project for the Programming 2 -course at JYU. 
            A simple diary, where user can write obervations about different species, for example animals or birds.
            The UI design made with SceneBuilder.
          </p><br />
          <p>Technologies: <strong>Java</strong> </p><br />
          <a href="https://github.com/lassilaitinen/Havaintopaivakirja">View project code</a>
          </div>
        </div>

        <div id="project-card">
          <img src={ohj1} alt="CupDrought" />
          <div id="project-info">
          <h2>Adventurer Game</h2>
          <p>
          My first programming project, done for the Programming 1 course. 
          A simple single-user game with the help of Jypeli -library.
          Game has a player, who can move around the map and collect coins.
          Includes basic features, such as jumping and moving left and right.
          </p><br />
          <p>Technologies: <strong>C#</strong></p><br />
          <a href="https://github.com/lassilaitinen/Seikkailija-peli">View project code</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;