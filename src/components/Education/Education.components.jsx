import './Education.styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Education =()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
       },[])
    return(<>
    <div className='container education'>
<div className='row'>
<h1 className='education'>Course & Education</h1>


<div className='col-xl-4 col-lg-4 offset-lg-2 offset-md-4 offset-sm-2' data-aos="flip-up">
<h2 className='education'>Education</h2>
<h5 className='education'>BS(Information Technology)</h5>
<h7 className='education'>University Of Punjab(2017-21)</h7>
</div>


<div className='col-xl-4 col-lg-4 offset-lg-2 offset-md-4 offset-sm-2' data-aos="flip-down">
<h2 className='education'>Courses</h2>
<h5 className='education'>JavaScript Course</h5>
<h7 className='education'>Newbie(Udemy)</h7>
<h5 className='education'>ReactJs Course</h5>
<h7 className='education'>Zero To Mastery Accademy(udemy)</h7>
<h5 className='education'>Advance ReactJs Course</h5>
<h7 className='education'>Mysterious Accademy(Google)</h7>


</div>
</div>
    </div>
    
    </>)
}

export default Education