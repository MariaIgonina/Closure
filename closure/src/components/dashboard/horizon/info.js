import React from 'react';
import { useState, useContext } from 'react';
import Select from 'react-select'
import '../../../App.css'
import Context from '../../../context';
import GCoS from './gcos'
import HelpRequest from './helprequest';
import IconButton from '@mui/material/IconButton';
import Diversity3 from '@mui/icons-material/Diversity3';
import CalculateIcon from '@mui/icons-material/Calculate';

function Info () {
  
  const { 
    callHorizons, 
    infoFinished, 
    formations,
    setFormations,
    horizons,
    setHorizons,
    gcos,
    setGcos,
    typeRes,
    depth
   } = useContext(Context)
  
   const [isVisibleGcos, setIsVisibleGcos] = useState(false);

   function popupGcos() {
     setIsVisibleGcos(!isVisibleGcos);
   }

   const [isVisibleContacts, setIsVisibleContacts] = useState(false);

   function popupHelpRequest() {
     setIsVisibleContacts(!isVisibleContacts);
   }
 

  return (
    <div className="info-horizon">
      <div className='horizongroup'>
        <h3 className="headers">Horizon</h3>
        <div>
          <IconButton aria-label="help"
          onClick={ popupHelpRequest }
          
          >
            <Diversity3 className="help"/>
          </IconButton>
          
          {isVisibleContacts && (
            <div className="popup">
              <HelpRequest
              popupHelpRequest={popupHelpRequest}
              ></HelpRequest>
              {/* <button 
              // className='helprequest' 
              onClick={ popupHelpRequest }>Close</button> */}
            </div>
          )}
          </div>
      </div>
      
      <label className='param-headers'>Formation</label>
      <select 
        required
        placeholder='Choose the formation'
        className='select-formation'
        onChange={ (el) => callHorizons(el.target.value) }
      > 
        {formations.map(el => (
          <option value={el}>{el}</option>
        ))}
      </select>
      
      <label className='param-headers'>Horizon</label>
      <select 
        required
        placeholder='Choose the horizon'
        className='select-formation'
        onChange={ (el) => infoFinished(el.target.value) }
      >
        {horizons.map(el => (
          <option value={el}>{el}</option>
        ))}
      </select>

      <h4 className='param-headers'>Type of reservoir</h4>
      <div className='infoparam'>{typeRes}</div>

      <h4 className='param-headers'>Depth</h4>
      <div className='infoparam'>{Math.round(depth)}</div>

      <div className='gcos-group'>
        <div className='gcos-header'>
          <h3 className='param-headers'>GCoS</h3>
          <IconButton aria-label="help"
            onClick={ popupGcos }
            className="help"
            >
            <CalculateIcon className="help"/>
          </IconButton>


          {isVisibleGcos && (
            <div className="popupGcos">
              <GCoS 
              popupGcos={popupGcos}
              >
              </GCoS>
              {/* <button onClick={ popupGcos }>Close</button> */}
            </div>
          )}
        </div>
        <div className='infoparam'>{gcos}</div>
      </div>
    </div>
  );
};

export default Info
  