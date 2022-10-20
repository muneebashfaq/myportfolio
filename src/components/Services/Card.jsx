import { Card } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

const Cards = ({title,description,icon})=>{
    return(<>
     <Card
    style={{
      width: "400px",
      height:"250px",
      marginTop:"30px",
      boxShadow: "5px 10px 18px #888888",
      fontSize:'16px'
    }}
    cover={
      <div style={{textAlign:"center",paddingTop:"34px"}}>
       {icon }
 
      </div>
   }
   
  >
    <Meta  style={{textAlign:"center",color:"black"}}
      title={title}
      description={description}
    />
  </Card>
    </>)
}

export default Cards