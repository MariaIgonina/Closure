import React from 'react';
import '../../../App.css'
import moment from 'moment';
import { useState, useEffect } from 'react';


function Stamp () {
  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(moment().format('MMMM Do YYYY'));
  }, []);

  return (
    <div className='stamp-box'>
    <div className="date">
      <h2 className='box-date'>{currentDate}</h2>
    </div>
    <div className="authors">
      <label className='auth-headers'>Author</label>
      <input required placeholder='Enter your name' className='author'></input>
      <label className='auth-headers'>Company</label>
      <input required placeholder='Enter your company' className='author'></input>
    </div>
    </div>
  );
};

export default Stamp
  