import './Skills.styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import ProgressBar from './ProgressBar';


const Skills =()=>{
    
    useEffect(()=>{
        Aos.init({duration:2000})
       },[])
    return(<>
    <div className='container skills'>
<div className='row'>
<h1 className='skills'>My Skills</h1>


<div className='col-xl-6 col-lg-6  skills' data-aos="zoom-in">

<h5 className='skills'>HTML</h5>
<Box sx={{ flexGrow: 1 }}>
      <ProgressBar  variant="determinate" value={90} color={"#1a90ff"} />
 
    <h5 className='skills'>CSS</h5>

<ProgressBar  variant="determinate" value={90} color={"orange"} />
   
    <h5 className='skills'>JavaScript</h5>

<ProgressBar  variant="determinate" value={70} color={"yellow"} />
  
    <h5 className='skills'>ReactJs</h5>

<ProgressBar  variant="determinate" value={80} color={"blue"} />
    
    <h5 className='skills'>Redux</h5>

<ProgressBar  variant="determinate" value={80} color={"brown"} />
    </Box>

</div>


<div className='col-xl-6 col-lg-6' data-aos="zoom-in">
<h5 className='skills'>TypeScript</h5>

<Box sx={{ flexGrow: 1 }}>
<ProgressBar  variant="determinate" value={70} color={"brown"} />
    <h5 className='skills'>RestFul APIs</h5>

<ProgressBar  variant="determinate" value={70} color={"blue"} />
    <h5 className='skills'>python</h5>

<ProgressBar  variant="determinate" value={70} color={"orange"} />
    <h5 className='skills'>Django</h5>

<ProgressBar  variant="determinate" value={70} color={"yellow"} />
     <h5 className='skills'>Database(MYSQL)</h5>

    <ProgressBar  variant="determinate" value={70} color={"orange"} />
   
    </Box>
</div>
</div>
    </div>
    
    </>)
}

export default Skills