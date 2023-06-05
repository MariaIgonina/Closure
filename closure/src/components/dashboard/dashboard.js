import React, { useContext, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
import Map from './map/map';
import MainInputs from './main-info/main-inputs';
import Horizon from './horizon/horizon';
import ChartRes from './main-info/reserves';
import Stamp from './main-info/stamp';
import Tornado from './main-info/tornado';
import Context from '../../context';
import '../../App.css';
import PrintButton from './pdfSaving';
import { Alert } from '@mui/material';

function Dashboard() {
  const [horizonCount, setHorizonCount] = useState(1);
  const { 
    calculate,
    errorGcos,
    errorSelects,
    errorSquare
    } = useContext(Context);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    language: 'en'
  });

  const handleAddHorizon = () => {
    setHorizonCount(prevCount => prevCount + 1);
  };

  return (
    <div className='all-dashboard' id='dashboard'>
      <div className="main-info">
        {isLoaded ? <Map className="map" /> : <h2>Your map is out of order</h2>}
        <MainInputs />
        <ChartRes />
        <Tornado />
        <Stamp />
      </div>
      
      {[...Array(horizonCount)].map((_, i) => (
        <Horizon key={i} />
      ))}
      
      <div className='row'>
      <button className="calculate" onClick={() => calculate()}>
        Calculate
      </button>
      {/* <button onClick={handleAddHorizon}>Add horizon</button> */}

      <button className='export'>
       {/* Print page */}
      <PrintButton id={"dashboard"} label={"Print page"} />
      
      </button>

      {errorSquare && <Alert severity="error">{errorSquare}</Alert>}
      {errorSelects && <Alert severity="error">{errorSelects}</Alert>}
      {errorGcos && <Alert severity="error">{errorGcos}</Alert>}
    
      </div>
    </div>
  );
}

export default Dashboard;