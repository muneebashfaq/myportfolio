'use client'
import SettingsIcon from '@mui/icons-material/Settings';
import LaptopIcon from '@mui/icons-material/Laptop';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import './Services.styles.css'

const ArrayProject=[
    {
        title:"Website security",
        description:"Secure authentication systems, role-based access control and data protection using modern best practices like JWT, encryption and API security.",
        icon:<SettingsIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
    {
      
        title:"Web Devolopment",
        description:"Building scalable, high-performance web applications using React, Next.js and Node.js with clean architecture and modern UI/UX.",
        icon:<LaptopIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
       
    },
    {
        title:"Responsive Web Design",
        description:"Creating fast, mobile-first and fully responsive interfaces that deliver seamless experiences across all devices and screen sizes.",
        icon:<SystemSecurityUpdateGoodIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
    {
       
        title:"Bug Fixing & Optimization",
        description:"Debugging complex issues, improving performance and optimizing applications for speed, scalability and reliability.",
        icon:<EngineeringIcon style={{ textAlign:"center",fontSize:"45px"}} />,
      
    },
    {
      
        title:"Payment & Fintech Solutions",
        description:"Developing secure payment systems, integrating gateways and building transaction workflows for real-world fintech applications.",
        icon:<PaymentsIcon style={{ textAlign:"center",fontSize:"45px"}} />,
    },
    {
       
        title:"E-Commerce Solutions",
        description:"Building complete e-commerce platforms with payment integration, product management and scalable backend systems.",
        icon:< AddShoppingCartIcon style={{ textAlign:"center",fontSize:"45px"}} />,
       
    },
]

export default ArrayProject