import './App.css';
import logo from './img/logo.png'
import React from 'react';
import Context from "./context";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Add from './components/adddata';
import Dashboard from './components/dashboard/dashboard';
import Support from './components/support';
import { Alert } from '@mui/material';
import PrintButton from './components/dashboard/pdfSaving';


function App() {

  const url = 'http://localhost:3009'

  //Map variables
  const [mainLat, setMainLat] = useState('')
  const [mainLong, setMainLong] = useState('')


  //Parameters variables
  //square
  const [minSquare, setMinSquare] = useState('')
  const [medSquare, setMedSquare] = useState('')
  const [maxSquare, setMaxSquare] = useState('')

  //Heff
  const [minHeff, setMinHeff] = useState('')
  const [medHeff, setMedHeff] = useState('')
  const [maxHeff, setMaxHeff] = useState('')

  //porosity
  const [minPoro, setMinPoro] = useState('')
  const [medPoro, setMedPoro] = useState('')
  const [maxPoro, setMaxPoro] = useState('')
  
  //saturation
  const [minSat, setMinSat] = useState('')
  const [medSat, setMedSat] = useState('')
  const [maxSat, setMaxSat] = useState('')
  
  //density
  const [minDensity, setMinDensity] = useState('')
  const [medDensity, setMedDensity] = useState('')
  const [maxDensity, setMaxDensity] = useState('')

  //volFactor
  const [minVolFactor, setMinVolFactor] = useState('')
  const [medVolFactor, setMedVolFactor] = useState('')
  const [maxVolFactor, setMaxVolFactor] = useState('')


  //JSON from calculators
  const [poroJSON, setPoroJSON] = useState({})
  const [heffJSON, setHeffJSON] = useState({})
  const [satJSON, setSatJSON] = useState({})
  const [densityJSON, setDensityJSON] = useState({})
  const [volFactorJSON, setVolFactorJSON] = useState({})
  const [squareJSON, setSquareJSON] = useState({})
  const [reservesJSON, setReservesJSON] = useState({})

  //Other variables
  const [formations, setFormations] = useState([])
  const [horizons, setHorizons] = useState([])
  const [typeRes, setTypeRes] = useState('')
  const [depth, setDepth] = useState('')
  const [gcos, setGcos] = useState(1)
  const [filteredData, setfilteredData] = useState([])

  //Reserves
  const [minRes, setMinRes] = useState('')
  const [medRes, setMedRes] = useState('')
  const [maxRes, setMaxRes] = useState('')

  //Errors
  const [errorSelects, setErrorSelects] = useState('')
  const [errorGcos, setErrorGcos] = useState('')
  const [errorSquare, setErrorSquare] = useState('')


  // We chose the basin, getting formations
  async function callFormations (basin) {
    const response = await fetch(url + '/traps/basin/' + basin)
    const allFormations = await response.json()

    //Creating options for the new droplist
    const allFormationsArray = ['---']
    allFormations.forEach(element => {
      allFormationsArray.push(element.formation)
    });

    setFormations(
      [...new Set(allFormationsArray)]
    )
  };


  // We chose the formation, getting horizons
  async function callHorizons (formation) {
    const response = await fetch(url + '/traps/formation/' + formation)
    const allHorizons = await response.json()

    //Creating options for the new droplist
    const allHorizonsArray = ['---']
    allHorizons.forEach(element => {
      allHorizonsArray.push(element.horizon)
    });

    setHorizons(
      [...new Set(allHorizonsArray)]
    )
  };


  // WE HAVE THE FINAL FILE FOR ALL THE CALCULATIONS
  async function infoFinished (horizon) {
    const response = await fetch(url + '/traps/horizon/' + horizon)
    const jsonForCalculations = await response.json()
    console.log(jsonForCalculations)
    
    //Getting med depth
    setDepth(-getMean('depth'))
    setfilteredData(jsonForCalculations)

    //Getting the type of reservoir
    setTypeRes(jsonForCalculations[0].reservoir)
    
    //Getting min, med, max
    setMinHeff(getMin('heff'))
    setMedHeff(getMean('heff'))
    setMaxHeff(getMax('heff'))

    setMinPoro(getMin('porosity'))
    setMedPoro(getMean('porosity'))
    setMaxPoro(getMax('porosity'))

    setMinSat(getMin('saturation'))
    setMedSat(getMean('saturation'))
    setMaxSat(getMax('saturation'))

    setMinDensity(getMin('density'))
    setMedDensity(getMean('density'))
    setMaxDensity(getMax('density'))

    setMinVolFactor(getMin('volumefactor'))
    setMedVolFactor(getMean('volumefactor'))
    setMaxVolFactor(getMax('volumefactor'))

    //Helper functions for defining min, mean and max
    //min
    function getMin (param) {
      const nums = []
      jsonForCalculations.map(el => nums.push(Number(el[param])))
      const min = Math.min.apply(null, nums)
      return min
    }
    //mean
    function getMean (param) {
      const nums = []
      jsonForCalculations.map(el => nums.push(Number(el[param])))
      const sum = nums.reduce((a, b) => a + b, 0);
      const med = sum / nums.length
      return med
    }
    //max
    function getMax (param) {
      const nums = []
      jsonForCalculations.map(el => nums.push(Number(el[param])))
      const max = Math.max.apply(null, nums)
      return max
    }
  }

  async function calculate() {
    const urlPython = 'http://localhost:5000/';
    
    if (
      
      minHeff == '' ||
      medHeff == '' ||
      maxHeff == '' ||
      minPoro == '' ||
      medPoro == '' ||
      maxPoro == '' ||
      minSat == '' ||
      medSat == '' ||
      maxSat == '' ||
      minDensity == '' ||
      medDensity == '' ||
      maxDensity == '' ||
      minVolFactor == '' ||
      medVolFactor == '' ||
      maxVolFactor == '' ||
      gcos == 0
    ) {
      setErrorSelects('Please choose basin, formation and horizon!');
    } else if (
      minSquare == '' ||
      medSquare == '' ||
      maxSquare == ''
    ) {
      setErrorSquare('Please enter min, med and max square!');
    } else if (
      gcos == 0
    ) {
      setErrorGcos('GCoS has to be more than 0!');
    } else {

      // PORO
      async function postPoroToPython({ poroMin, poroMed, poroMax }) {
        const response = await fetch(urlPython + 'poro', {
          method: 'POST',
          body: JSON.stringify({ poroMin, poroMed, poroMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }
  
      // HEFF
      async function postHeffToPython({ heffMin, heffMed, heffMax }) {
        const response = await fetch(urlPython + 'heff', {
          method: 'POST',
          body: JSON.stringify({ heffMin, heffMed, heffMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
  
        const parsed = await response.json();
        return parsed;
      }

      // SATURATION
      async function postSatToPython({ satMin, satMed, satMax }) {
        const response = await fetch(urlPython + 'sat', {
          method: 'POST',
          body: JSON.stringify({ satMin, satMed, satMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }

      //DENSITY
      async function postDensityToPython({ densityMin, densityMed, densityMax }) {
        const response = await fetch(urlPython + 'density', {
          method: 'POST',
          body: JSON.stringify({ densityMin, densityMed, densityMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }

      // VOLUME FACTOR
      async function postVolFactToPython({ volFactorMin, volFactorMed, volFactorMax }) {
        const response = await fetch(urlPython + 'volfactor', {
          method: 'POST',
          body: JSON.stringify({ volFactorMin, volFactorMed, volFactorMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }

      // SQUARE
      async function postSquareToPython({ squareMin, squareMed, squareMax }) {
        const response = await fetch(urlPython + 'square', {
          method: 'POST',
          body: JSON.stringify({ squareMin, squareMed, squareMax }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }

      // RESERVES
      async function postEverythingToPython({ 
        squareMin, 
        squareMed, 
        squareMax,
        heffMin, 
        heffMed, 
        heffMax,
        poroMin, 
        poroMed, 
        poroMax,
        satMin, 
        satMed, 
        satMax,
        densityMin, 
        densityMed, 
        densityMax,
        volFactorMin, 
        volFactorMed, 
        volFactorMax,
        gcos
      }) {
        const response = await fetch(urlPython + 'montecarlo', {
          method: 'POST',
          body: JSON.stringify({ 
            squareMin, 
            squareMed, 
            squareMax,
            heffMin, 
            heffMed, 
            heffMax,
            poroMin, 
            poroMed, 
            poroMax,
            satMin, 
            satMed, 
            satMax,
            densityMin, 
            densityMed, 
            densityMax,
            volFactorMin, 
            volFactorMed, 
            volFactorMax,
            gcos 
          }),
          headers: {
            'content-type': 'application/json',
          },
        });
    
        const parsed = await response.json();
        return parsed;
      }
    
      const [ poroJSON, heffJSON, satJSON, densityJSON, volFactorJSON, squareJSON, reservesJSON ] = await Promise.all([
        postPoroToPython({ poroMin: minPoro, poroMed: medPoro, poroMax: maxPoro }),
        postHeffToPython({ heffMin: minHeff, heffMed: medHeff, heffMax: maxHeff }),
        postSatToPython({ satMin: minSat, satMed: medSat, satMax: maxSat }),
        postDensityToPython({ densityMin: minDensity, densityMed: medDensity, densityMax: maxDensity }),
        postVolFactToPython({ volFactorMin: minVolFactor, volFactorMed: medVolFactor, volFactorMax: maxVolFactor }),
        postSquareToPython({ squareMin: minSquare, squareMed: medSquare, squareMax: maxSquare }),
        postEverythingToPython({
          squareMin: minSquare, squareMed: medSquare, squareMax: maxSquare,
          heffMin: minHeff, heffMed: medHeff, heffMax: maxHeff,
          poroMin: minPoro, poroMed: medPoro, poroMax: maxPoro,
          satMin: minSat, satMed: medSat, satMax: maxSat,
          densityMin: minDensity, densityMed: medDensity, densityMax: maxDensity,
          volFactorMin: minVolFactor, volFactorMed: medVolFactor, volFactorMax: maxVolFactor,
          gcos: gcos
        })
      ]);
  
      setPoroJSON(poroJSON);
      setHeffJSON(heffJSON);
      setSatJSON(satJSON);
      setDensityJSON(densityJSON);
      setVolFactorJSON(volFactorJSON);
      setSquareJSON(squareJSON);
      setReservesJSON(reservesJSON)
      
      //Estimate reserves
      if (reservesJSON.length !== 0) {
        const reserves = reservesJSON.labels
        setMinRes (Math.round(Math.min.apply(null, reserves)))
        setMaxRes (Math.round(Math.max.apply(null, reserves)))
    
        const probabilities = reservesJSON.values
        const maxProb = Math.max.apply(null, probabilities)
        const indexMaxProb = probabilities.indexOf(maxProb)
        setMedRes (Math.round(reserves[indexMaxProb]))
      }
    }
  }
  
  return (
    <Context.Provider value={{ 
      url, 
      mainLat, 
      setMainLat, 
      mainLong, 
      setMainLong, 
      callFormations,
      formations,
      setFormations,
      horizons,
      setHorizons,
      gcos,
      setGcos,
      callHorizons,
      infoFinished,
      typeRes,
      depth,
      minPoro,
      medPoro,
      maxPoro,
      minHeff,
      medHeff,
      maxHeff,
      minSat,
      medSat,
      maxSat,
      minDensity,
      medDensity,
      maxDensity,
      minVolFactor,
      medVolFactor,
      maxVolFactor,
      poroJSON,
      heffJSON,
      satJSON,
      squareJSON,
      volFactorJSON,
      densityJSON,
      filteredData,
      minSquare,
      setMinSquare,
      medSquare, 
      setMedSquare,
      maxSquare,
      setMaxSquare,
      reservesJSON,
      gcos,
      setGcos,
      minRes,
      medRes,
      maxRes, 
      calculate,
      errorGcos,
      errorSelects,
      errorSquare
       }}>

      <div className='everything'>
        <img src={logo} alt="logo" id="logo" />
        
        <Navbar />

        <Routes>
          <Route path= '/' element={<Dashboard id={'dashboard'}/>} />
          <Route path= '/adddata' element={<Add />} />
          <Route path= '/support' element={<Support />} />
      
        </Routes>
      </div>

    </Context.Provider>
  );
}

export default App;