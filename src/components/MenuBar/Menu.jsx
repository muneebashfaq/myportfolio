import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Intro from './../Intro/Intro';
import Menu2 from './Menu2';
import About from '../About/About.component';
import Education from '../Education/Education.components';
import Skills from '../Skills/Skills.component';
import Projects from '../Projects/Projects.component';
import Blog from '../Blog/Blog.component';
import Contactus from '../Contactus/Contactus.component'
import Services from '../Services/Services.component'
import "./Menu.css"
const drawerWidth = 240;
const navItems = ['Home', 'About','Education','Skills','Blog','Projects','Services','Contact'];


function Menu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <b style={{color:"orange",fontFamily: "Times New Roman, Times, serif",fontSize:"25px"
}}>Portfolio</b>
      </Typography>
      <Divider /> {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <a href={`#${item}`} className="Menu"> <ListItemText primary={item} /></a> 
             
            </ListItemButton>
          </ListItem>
        ))}
      <List>
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'rgb(15, 23, 41)',
      },
    },
  });
  return (<>
    <Menu2/>
    <Box sx={{ display: 'flex'}} >
        <ThemeProvider theme={darkTheme}>
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block',md:'none' }}}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none',  sm: 'none',md:'block'} }}
          >
           <b style={{color:"orange",fontFamily: "Times New Roman, Times, serif",fontSize:"25px",
           padding:"25px"
}}>Portfolio</b>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none',md:'block' }  }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
               <a href={`#${item}`} className="Menu">{item}</a> 
              
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block',md:'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        
      
     
      </Box>
      </ThemeProvider>
    </Box>
     
     <div  id="Home" className="color_dark">
          <Intro/>
    </div>
    <div  id="About" className="color_light" >
    <About/>
    </div>
    <div  id="Education"  className="color_dark">
    <Education/>
    </div>
    <div  id="Skills" className="color_light">
    <Skills/>
    </div>
    <div  id="Blog" className="color_dark">
    <Blog/>
    </div>
    <div  id="Projects" className="color_light">
    <Projects/>
    </div>
    <div  id="Services" className="color_dark">
    <Services/>
    </div>
   
    <div  id="Contact" className="color_light" >
    <Contactus/>
    </div>
  

    </>  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
