import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"

function Home() {
  const LinkedInURL = "https://www.linkedin.com/in/tejaswibhokare/"
  const handleLinkedInClick = () => {
    window.open(LinkedInURL, '_blank');
  }

  const emailAddress = "tejaswitanajibhokare@gmail.com";
  const handleEmailClick = () => {
    window.open(`mailto: ${emailAddress}`)
  }
  const GitHubURL = "https://github.com/tejubhokare"
  const handleGitHubClick = () => {
    window.open(GitHubURL, '_blank');
  }

  return (
    <div className="home">
      <div className="about">

        <h2>Hi, My Name is Tejaswi</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learning and creating Web Applications.</p>
          <LinkedInIcon style={{ cursor: 'pointer' }} onClick={handleLinkedInClick} />
          <EmailIcon style={{ cursor: 'pointer' }} onClick={handleEmailClick} />
          <GitHubIcon style={{ cursor: 'pointer' }} onClick={handleGitHubClick} />
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span> ReactJS, NextJS, Redux, HTML, CSS, NPM</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, MySQL, SQL Server </span>
          </li>
          <li className="item">
            <h2>Programming Langauges</h2>
            <span> JavaScript, TypeScript, C# .Net </span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home
