import React from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Navbar () {


  return (
    <div className='navbar'>
      <a href='/' className='link'>Create dashboard</a>
      <a href='/adddata' className='link'>Add data</a>
      <IconButton aria-label="help"
        
        href='/support' className='link'
        >
          <HelpOutlineIcon className='linksupport'/>
      </IconButton>
      {/* <a href='/support' className='link'>Support</a> */}
    </div>
  );
};

export default Navbar
  