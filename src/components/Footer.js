import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';





function Footer() {
    return (
        <div className="footer">
            <div>
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
            <p> &copy; 2024 tejaswibhokare.com</p>
        </div>
    )
}

export default Footer
