 import './About.styles.css'
 import mypicture from '../../assets/MyPicture.jpeg'
 import Aos from 'aos'
 import 'aos/dist/aos.css'
 import GitHubIcon from '@mui/icons-material/GitHub';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';
 import EmailIcon from '@mui/icons-material/Email';
 import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
 import HomeIcon from '@mui/icons-material/Home';
 import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { useEffect } from 'react'
 const About =()=>{
    useEffect(()=>{
     Aos.init({duration:2000})
    },[])
    return(<>
    <div className='container'>
    <h1 className="About">About Me</h1>
    <div className='row'>
        <div className='col-md-6' data-aos="zoom-out-right" >
<img src={mypicture} alt="muneeb picture" className='About'/>
        </div>
        <div className='col-md-6 about_info' data-aos="zoom-out-left">
   <h2 className='About'>Full-Stack Web Developer</h2>
  
 <p className='about'>
   I have great experience in web design and development. 
   I work a day minimum of 7-8 hours. I love my work. 
   Its my profession & I learnt new things every day.I absolutely try to understand what 
   they want for their website, I always help them from beginning to the end of the project.
   I am very familiar with modern web technologies and web development lifecycle.
   </p>
   <div className='row'>
   <div className="col-md-6">
  
   <p className='about'>
   <GitHubIcon/> Github : <a href='https://github.com/muneebashfaq' target="_blank" className='About'>Muneeb Ashfaq</a><br/>
   <EmailIcon/> Gmail : <a href='mmuneeb840@gmail.com' target="_blank" className='About'>mmuneeb840@gmail.com</a>
    
   </p>
   
   </div>

   <div className="col-md-6">
   <LinkedInIcon/> Linkedin : <a href='https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/' target="_blank" className='About'>Muhammad Muneeb</a>
   <br/>
   <PhoneAndroidIcon/> Phone Number : <a href=''>+92324-8406920</a>
   
   </div>
   </div>
   <HomeIcon/> Address : Kot Abdul Malik,Lahore,Pakistan<br/><br/>
   <Button href={require('../../assets/MyCv.pdf')} download="myFile" type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}  danger>
        DWONLOAD RESUME
      </Button>
</div>

    </div>
    </div>
    </>)
 }
 export default About