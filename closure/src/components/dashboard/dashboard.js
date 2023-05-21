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
import { config } from 'dotenv';

config();

const API_KEY = process.env.GOOGLE_MAP_KEY;

function Dashboard() {
  const [horizonCount, setHorizonCount] = useState(1);
  const { calculate } = useContext(Context);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    language: 'en'
  });

  const handleAddHorizon = () => {
    setHorizonCount(prevCount => prevCount + 1);
  };

  // My pdf brakes everything :( it's better to recreate it
  // const MyDoc = () => (
  //   <Document>
  //     <Page>
  //       <View>
  //         <Text>My Awesome PDF</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );

  return (
    <>
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
      <button className="calculate" onClick={() => calculate()}>
        Calculate
      </button>
      {/* <button onClick={handleAddHorizon}>Add horizon</button> */}
      {/* <PDFDownloadLink document={<MyDoc />} fileName="my_document.pdf" className='export'>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink> */}
    </>
  );
}

export default Dashboard;