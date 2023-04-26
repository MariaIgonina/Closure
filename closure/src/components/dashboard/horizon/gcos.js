import React from 'react';
import '../../../gcosPopup.css'
import '../../../App.css'
import { useState, useContext } from 'react';
import Context from '../../../context';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function GCoS ({popupGcos}) {
  const { gcos, setGcos } = useContext(Context)

  const [reservoir, setReservoir] = useState('')
  const [seal, setSeal] = useState('')
  const [trap, setTrap] = useState('')
  const [source, setSource] = useState('')
  const [migration, setMigration] = useState('')
  
  const newGCoS = Math.round(Number(reservoir) * Number(seal) * Number(trap) * Number(source) * Number(migration) * 100) / 100


  return (
    <div className='all-gcos'>
      <div className='gcospopup'>
        <IconButton aria-label="help"
          href='https://www.linkedin.com/pulse/exploration-risk-success-pos-other-benchmarks-jean-marie-questiaux/' className='gcoslink'
          >
            <HelpOutlineIcon className='gcoslink'/>
          </IconButton>
        <form onSubmit={setGcos(newGCoS)} >
          <div className='basic-info'>
            
            <input 
            placeholder='Reservoir' 
            className='gcos-input'
            value={reservoir} 
            onChange={text => setReservoir(text.target.value)}
            ></input>

            <div className='input-coordinates'>

              <input 
              placeholder='Top seal' 
              className='gcos-input'
              value={seal} 
              onChange={text => setSeal(text.target.value)}
              ></input>

              <input placeholder='Trap' 
              className='gcos-input'
              value={trap} 
              onChange={text => setTrap(text.target.value)}
              ></input>

            </div>

            <input 
            placeholder='BaSource rock & Hydrocarbon type' 
            className='gcos-input'
            value={source} 
            onChange={text => setSource(text.target.value)}
            ></input>

            <input 
            placeholder='Maturity & Migration' 
            className='gcos-input'
            value={migration} 
            onChange={text => setMigration(text.target.value)}
            ></input>

          </div>

          <h2 className='final-gcos'>Final GCoS {newGCoS}</h2>
        </form>
        <button 
          className='closepopup'
          onClick={ popupGcos }>Calculate</button>
      </div>
    </div>
  );
};

export default GCoS
  