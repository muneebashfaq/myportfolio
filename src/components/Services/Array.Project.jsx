import SettingsIcon from '@mui/icons-material/Settings';
import LaptopIcon from '@mui/icons-material/Laptop';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import reactjs_logo from '../../assets/reactjs.png'
import './Services.styles.css'

const ArrayProject=[
    {
        title:"Website security",
        description:"I am also expert in authentication service of any website. I can make any website srtongly secure .",
        icon:<SettingsIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
    {
      
        title:"Web Devolopment",
        description:"As a front end devoloper, I am expert in codding. If you need a beautifull dynamic website with all new technology and accessibility.I can provide you this service.",
        icon:<LaptopIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
       
    },
    {
        title:"Responsive Web Design",
        description:"A responsive design makes your website accessible to all users, regardless of their device.",
        icon:<SystemSecurityUpdateGoodIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
    {
       
        title:"Fixing problems",
        description:"Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.",
        icon:<EngineeringIcon style={{ textAlign:"center",fontSize:"45px"}} />,
      
    },
    {
      
        title:"Frogpay",
        description:"This App is build for international client using Reactjs.Its Basically an cryptocurrency payment App",
        icon:<img src={reactjs_logo}/>,
    },
    {
       
        title:"E-Commerce Website",
        description:"Integration of E-commerce platforms, payment gateways, custom product templates, and more.",
        icon:< AddShoppingCartIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
]

export default ArrayProject