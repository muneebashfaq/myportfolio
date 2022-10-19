import './Intro.css'
import 'antd/dist/antd.css';
import mypicture from '../../assets/webdevelopment.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { Typewriter } from 'react-simple-typewriter'
const Intro=()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
    return(<>
    <div className='container intro'>
        <div className='row'>
            <div className='col-xl-9 col-lg-8 col-md-7 intro' data-aos="fade-right">
            <p className='intro'>Hi,My Name Is Muhammad Muneeb<br/>
            I'm <span style={{color:"rgb(219, 20, 60)"}}><Typewriter 
            words={['Web Developer!',  'ReactJs Web Developer', 'FrontEnd Web Developer', 'FullStack Web Developer']}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
        loop={Infinity}
        delaySpeed={1000}
       
      />
      </span>
            </p>
            <p>
            Coding & Development is my passion, As a JavaScript ReactJs and <br/> Python Django developer,
             I have designed, developed, and launched<br/> highly customized responsive websites
            </p>
            <Button href={require('../../assets/MyCv.pdf')} download="myFile" type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}  danger>
        DWONLOAD RESUME
      </Button>
            </div>

            <div className='col-xl-3 col-lg-4 col-md-5 intro_pic' data-aos="fade-left" >
           <img src={mypicture} alt="ads" className="intro" style={{width:"250px",height:"200px"}}/>
</div>

        </div>
   
    </div>
  
    </>)
}
export default Intro