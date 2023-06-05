import React from 'react';
import { useState, useContext } from 'react';
import '../../../App.css'
import Context from '../../../context';


function HelpRequest ({popupHelpRequest}) {
  
  const { filteredData } = useContext(Context)

  return (
    <div className='all-help'>
      <div className="popup-help">
        {filteredData.length === 0 ? (
          <h3 className="headers helperror">Please choose a horizon!</h3>
        ) : (
          <>
            <h3 className="headers helperror">Contact with your collegues for help:</h3>
            <div className="scrollable-list">
              <ul className='list-helpers'>
                {filteredData.map(el => (
                  <li>
                    <h3 className='field-name'>{el.name}:   <b className='emailhelp'>{el.contact}</b></h3>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <button className='closepopup' onClick={popupHelpRequest}>Thank you!</button>
      </div>
    </div>
  );
}

export default HelpRequest
  