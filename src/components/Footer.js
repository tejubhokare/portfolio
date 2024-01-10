import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"


function Footer() {
    const LinkedInURL = "https://www.linkedin.com/in/tejaswibhokare/"
    const handleLinkedInClick = () => {
        window.open(LinkedInURL, '_blank');
    }
    const GitHubURL = "https://github.com/tejubhokare"
    const handleGitHubClick = () => {
        window.open(GitHubURL, '_blank');
    }

    return (
        <div className="footer">
            <div className="socialMedia">
                <LinkedInIcon style={{ cursor: 'pointer' }} onClick={handleLinkedInClick} />
                <GitHubIcon style={{ cursor: 'pointer' }} onClick={handleGitHubClick} />
            </div>
            <p> &copy; 2024 tejaswibhokare.com</p>
        </div>
    )
}

export default Footer
