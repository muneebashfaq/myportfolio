import * as React from 'react';
import PropTypes from 'prop-types';
import './Menu.css'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import 'antd/dist/antd.css';
import {Popover } from 'antd';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = ""    ;

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Menu2(props) {
  return (
    <React.Fragment >
 
      <div id="back-to-top-anchor" />  
      <ScrollTop {...props} >
        <div className='' >
        <Fab size="small" aria-label="scroll back to top"  >
        <a href="#top">   <Popover  title="Click to Top" trigger="hover">
     <KeyboardArrowUpIcon    onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}/>
    </Popover>
    </a>
       
          
        </Fab>
        </div>
      </ScrollTop>
    
    </React.Fragment>
  );
}
