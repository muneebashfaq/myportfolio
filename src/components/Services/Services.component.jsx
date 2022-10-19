import './Services.styles.css'
import ArrayProject from './Array.Project';
import Cards from './Card';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Services=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
       },[])
    return(<>
    <h1 className='services'>Our Services</h1>
    <div className='container'>
    <div className='row'>
    {ArrayProject.map(({title,description,pic_url,github},index)=>{
    
    return(
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xsm-6 services_card" data-aos="flip-right">
   <Cards title={title} description={description} pic_url={pic_url} github={github} key={index} />
  </div>
  )
   })}
  </div>
  </div>
    </>)
}

export default Services