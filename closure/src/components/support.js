import React from 'react';
import '../App.css'

import support from '../img/support.jpg'

function Support () {


  return (
    <div className='support'>
      <p className='mymessage'>If you have any questions, feel free to contact us!</p>
      <div className='row'>
        <div className='photo-email'>

          <p className='myname'>Maria Igonina</p>
          <p className='email'>igoninam@some.com</p>
          
        </div>
        <div className='myphoto'>
          <img src={support} className='img-support'/>
        </div>
      </div>
    </div>
  );
};

export default Support
  