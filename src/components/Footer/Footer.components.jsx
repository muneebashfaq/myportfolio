import './Footer.styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer=()=>{
    return<>
    <div>
       <h4  className="footer_text">Copyright © 2022 - All rights reserved By</h4>
       <h5 className="footer_text">Muhammad Muneeb</h5>
       <div className="footer_icons">
  <a href='https://www.instagram.com/muhammad_muneeb01/' target='__blank' className='footer_icons'><InstagramIcon/></a>
  <a href='https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/' target='__blank' className='footer_icons'><LinkedInIcon/></a>
  <a href='https://github.com/muneebashfaq' target='__blank' className='footer_icons'><GitHubIcon/></a>
  <a href='https://www.youtube.com/channel/UC1Cl2U0l8OWRvaJR4ZgQwfw' target='__blank' className='footer_icons'><YouTubeIcon/></a>

</div>
    </div>
    </>
}
export default Footer