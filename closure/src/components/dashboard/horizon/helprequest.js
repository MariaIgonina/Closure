import React from 'react';
import { useState, useContext } from 'react';
import '../../../App.css'
import Context from '../../../context';


function HelpRequest ({popupHelpRequest}) {
  
  const { filteredData } = useContext(Context)

  // const contacts = []
  // filteredData.map(el => contacts.push(el.contact))
  // const uniqueContacts = [...new Set(contacts)]

  return (
    <div className='all-help'>
      <div className="popup-help">
        <h3 className="headers">Here are people, who worked with this horizons:</h3>
        {filteredData.length === 0 ? 'Please choose a horizon!' : 
        <ul>
          {filteredData.map(el => {
            return (
            <li className='fieldName'>
              Field {el.name}: <b className='emailhelp'>{el.contact}</b>
            </li>
            )
          })}

        </ul>
        }
        <button 
          className='closepopup'
          onClick={ popupHelpRequest }>Thank you!</button>
      </div>
    </div>
  );
};

export default HelpRequest
  