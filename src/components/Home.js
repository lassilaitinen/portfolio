import React from 'react';
import './Home.css';
import me from '../images/me.jpg';

const Home = () => {
    return (
      <div className="Home">

        <div id="info-container">
          <h1>Lassi Laitinen</h1>
          <div>
            <img src={me} alt="Minä" />
            <p>
              Hi! My name is Lassi Laitinen and
              I'm a IT and software engineering student from Finland. 
              I have experience in different technologies and I am always eager to learn new things and skills.
            </p>
          </div>
          <div id='info-card'>
            Technologies used:
            <ul>
              <li>Python</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C#</li>
              <li>GitHub, GitLab</li>
              <li>Robot Framework</li>
              <li>SQL, json</li>
            </ul>
          </div>
          <div id='info-card'>
            View my projects:<br /><br />
            <a href="/projects">Projects site</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;