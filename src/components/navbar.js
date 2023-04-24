import React from 'react';
import '../App.css';

function Navbar () {


  return (
    <div className='navbar'>
      <a href='/' className='link'>Create dashboard</a>
      <a href='/adddata' className='link'>Add data</a>
      <a href='/support' className='link'>Support</a>
    </div>
  );
};

export default Navbar
  