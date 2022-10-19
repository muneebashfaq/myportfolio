import { Card } from 'antd';
import { Button } from 'antd';
import blog_pic from '../../assets/blog.jpg';
import 'antd/dist/antd.css';
import './Blog.styles.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const { Meta } = Card;
const Blog=()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
    return(<>
    <div className="container">
        <h1 className="blog">My Blogs</h1>
        <div className="row blog" data-aos="fade-right">
            <div className='blog_card'>
        <Card
    style={{
      width: "300px",
      height:"420px",
      marginTop:"30px",
      boxShadow: "5px 10px 18px #888888",
    }}
    cover={
      <img
        alt="example"
        src={blog_pic}
      />
    }
    actions={[
        <Button type="primary" style={{backgroundColor:"purple"}}>COMING SOON</Button>,  
    ]}
  >
    <Meta
      title={"My Blogs Side"}
      description={"This is my official blogs side where i post my blogs in future In Sha Allah"}
    />
  </Card>
        </div>
        </div>
    </div>
    </>)
}
export default Blog