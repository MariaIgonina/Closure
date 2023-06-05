import React from 'react';
import '../../../gcosPopup.css'
import '../../../App.css'
import { useState, useContext } from 'react';
import Context from '../../../context';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { TextField, Alert } from '@mui/material';

function GCoS ({popupGcos, setGcos}) {

  const [reservoir, setReservoir] = useState('');
  const [seal, setSeal] = useState('');
  const [trap, setTrap] = useState('');
  const [source, setSource] = useState('');
  const [migration, setMigration] = useState('');

  // let newGCoS = 1;

  // if (reservoir == '' || seal == '' || trap == '' || source == '' || migration == '') {
  //   newGCoS = 1;
  // } else {
  const  newGCoS = Math.round(Number(reservoir) * Number(seal) * Number(trap) * Number(source) * Number(migration) * 100) / 100;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setGcos(newGCoS);
    popupGcos();
  };


  return (
    <div className='all-gcos'>
      <div className='gcospopup'>
        <IconButton aria-label="help"
          href='https://www.linkedin.com/pulse/exploration-risk-success-pos-other-benchmarks-jean-marie-questiaux/' className='gcoslink'
          >
            <HelpOutlineIcon className='gcoslink'/>
          </IconButton>
          <div className="gcos-form">
          <form onSubmit={handleSubmit}>
            <div className='basic-info'>

              <TextField 
                id="Reservoir"
                size="small" 
                label="Reservoir" 
                variant="outlined"
                margin="normal"
                value={reservoir} 
                onChange={text => setReservoir(text.target.value)}
              />

              <TextField 
                id="Top seal"
                size="small" 
                label="Top seal" 
                variant="outlined"
                margin="normal"
                value={seal} 
                onChange={text => setSeal(text.target.value)}
              />

              <TextField 
                id="Trap"
                size="small" 
                label="Trap" 
                variant="outlined"
                margin="normal"
                value={trap} 
                onChange={text => setTrap(text.target.value)}
              />

              <TextField 
                id="Source rock"
                size="small" 
                label="Source rock" 
                variant="outlined"
                margin="normal"
                value={source} 
                onChange={text => setSource(text.target.value)}
              />

              <TextField 
                id="Maturity & Migration"
                size="small" 
                label="Maturity & Migration"
                variant="outlined"
                margin="normal"
                value={migration} 
                onChange={text => setMigration(text.target.value)}
              />

            </div>

            <h2 className='final-gcos'>Final GCoS {newGCoS}</h2>
          </form>
          <div className='row'>
            <button 
              className='closepopup'
              onClick={ handleSubmit }>
              Save
            </button>
            <button 
              className='closepopup-save'
              onClick={ popupGcos }>
              Keep GCoS = 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GCoS
  