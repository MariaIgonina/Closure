import React from 'react';
import '../App.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import support from '../img/support.jpg'

function Support () {

  return (
    <div className='support'>
      <p className='mymessage'>If you have any questions, feel free to contact us!</p>
      <div className='row'>
        <div className='photo-email'>

          <p className='myname'>Maria Igonina</p>
          
          <div className='row'>
            <EmailIcon 
            className='linksupport'/>
            <p className='email phone'>mvigonina@gmail.com</p>
          </div>

          <div className='row'>
            <PhoneIcon 
            className='linksupport'/>
            <p className='phone'>+34 647 491 970</p>
          </div>

        </div>
        <div className='myphoto'>
          <img src={support} className='img-support'/>
        </div>
      </div>
    </div>
  );
};

export default Support
  