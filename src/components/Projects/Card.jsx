import { Card } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

const Cards = ({title,pic_url,description,github})=>{
    return(<>
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
        src={pic_url}
        style={{width:"100%",height:"200px"}}
      />
    }
    actions={[

  github?
      <a href={`${github}`} target="_blank"> <Button type="primary" style={{backgroundColor:"brown"}}>GITHUB</Button></a>:"",
  
    ]}
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
    </>)
}

export default Cards