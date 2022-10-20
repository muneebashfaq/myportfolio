import './Contactus.styles.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputAdornment from '@mui/material/InputAdornment';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Aos from 'aos'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Contactus=()=>{
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  const form = useRef();

  //for form validation
  const [namecheck,setnamecheck] = useState(true)
  const [emailcheck,setemailcheck] = useState(true)
  const [emailvalid,setemailvalid] = useState(false)
  const [msgcheck,setmsgcheck] = useState(true)
  const [formname,setformname] = useState(false)
  const [formemail,setformemail] = useState(false)
  const [formmsg,setformmsg] = useState(false)
//text field values
  const [nameval,setnameval] = useState("")
  const [emailval,setemailval] = useState("")
  const [msgval,setmsgval] = useState("")

  const notify = () => toast.success('Successfully Send Your Message!!!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });



  const sendEmail = (e) => {
    e.preventDefault();

    if(formemail === true && formmsg === true && formname === true){
      setnameval("")
      setemailval("")
      setmsgval("")
      setformname(false)
      setformemail(false)
      setformmsg(false)
    emailjs.sendForm('service_47h4va7', 'template_6ub9p8v', form.current, 'wHTAn1YPSyWt8yS2F')
    notify()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }else{
      alert("Please Correctly Fill The Form")

    }

  };
 

  const validation=(e)=>{
  var  val =e.target.value
  var  name = e.target.name

  if(name === "user_name"){
    setnameval(val)
    if (!val) {
      setformname(false)
      setnamecheck(false)
      }else{
        setnamecheck(true)
        setformname(true)
      }

    }else if(name === "user_email"){
      setemailval(val)
      var validRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (val) {
        setemailcheck(true)
        if(val.match(validRegex)){
          setemailvalid(false)
          setformemail(true)
        }
        else{
          setformemail(false)
          setemailvalid(true)

        }
        }
        else{
          setformemail(false)
          setemailcheck(false)
         
        }

    }else if(name ==="message"){
      setmsgval(val)
      if (!val) {
        setformmsg(false)
        setmsgcheck(false)

        }else{
          setformmsg(true)
          setmsgcheck(true)
        }

    }

  }
    return(<>
   
    <h1 className='contactus'>Get In Touch</h1>
      <Box sx={{ flexGrow: 1 }} data-aos="fade-right">
      <Grid container spacing={2}>
        <Grid item xs={11}>
        <div className="contact_body" >
        <form ref={form} onSubmit={sendEmail}>
    <Box sx={{ '& > :not(style)': { m: 1, width: { xs:210, sm: 370, md: 420, lg: 470, xl: 1000 } } }}>
    
      <TextField
        id="input-with-icon-textfield"
        label="Your Name"
        name="user_name"
        value={nameval}
        onChange={validation}
        onClick={validation}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /><br/>
      {namecheck?"":<label className='show_error'>Required Field Must Fill</label>}
      
      <br/>
        <TextField
        id="input-with-icon-textfield"
        name="user_email"
        label="Your Email"
        value={emailval}
        onChange={validation}
        onClick={validation}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
<br/>
{emailcheck?emailvalid?<label className='show_error'>Email Not Valid</label>:"":<label className='show_error'>Required Field Must Fill</label>}
      <br/>
<TextField
          id="standard-multiline-static"
          label="Your Message"
          name="message"
          multiline
          value={msgval}
          rows={4}
          onChange={validation}
          onClick={validation}
          variant="standard"
        />
        <br/>
    {msgcheck?"":<label className='show_error'>Required Field Must Fill</label>}
      <br/>
    </Box>

      <Button variant="contained" type="submit" endIcon={<SendIcon />} color="secondary">
        Send
      </Button>
      <ToastContainer
position="top-right"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

    </form>
    </div>
        </Grid>
        <Grid item xs={1}>
        <div className="sidebar_contact" data-aos="fade-right">
  <a href='https://www.instagram.com/muhammad_muneeb01/' target='__blank' className='contact_icon'><InstagramIcon/></a>
  <a href='https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/' target='__blank' className='contact_icon'><LinkedInIcon/></a>
  <a href='https://github.com/muneebashfaq' target='__blank' className='contact_icon'><GitHubIcon/></a>
  <a href='https://www.youtube.com/channel/UC1Cl2U0l8OWRvaJR4ZgQwfw' target='__blank' className='contact_icon'><YouTubeIcon/></a>

</div>
        </Grid>
      </Grid>
    </Box>
    </>)
}
export default Contactus