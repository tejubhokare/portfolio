import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"

function Home() {
  const LinkedInURL = "https://www.linkedin.com/in/tejaswibhokare/"
const handleLinkedInClick = ()=>{
  window.open(LinkedInURL, '_blank');
}

const emailAddress = "tejaswitanajibhokare@gmail.com";
const handleEmailClick = ()=>{
  window.open(`mailto: ${emailAddress}`)
}
const GitHubURL = "https://github.com/tejubhokare"
const handleGitHubClick = ()=>{
  window.open(GitHubURL, '_blank');
}

    return (
        <div className="home">
          <div className="about">

            <h2>Hi, My Name is Tejaswi</h2>
            <div className="prompt"> 
            <p> A Software Developer with a passion for learning and creating.</p>
            <LinkedInIcon style={{cursor: 'pointer'}} onClick ={handleLinkedInClick} />
            <EmailIcon style={{cursor: 'pointer'}} onClick ={handleEmailClick}/>
            <GitHubIcon style={{cursor: 'pointer'}} onClick ={handleGitHubClick}/>
            </div>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
              <li className="item">
                <h2>Front-End</h2>
                <span> ReactJS, Redux, HTML, CSS, NPM, NextJS</span>
              </li>
              <li className="item">
                <h2>Back-End</h2>
                <span>NodeJS, ExpressJS, MongoDB, SQL </span>
              </li>
              <li className="item">
                <h2>Langauges</h2>
                <span> JavaScript, TypeScript </span>
              </li>

            </ol>
          </div>
        </div>
    )
}

export default Home
