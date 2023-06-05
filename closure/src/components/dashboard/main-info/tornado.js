import React, { useEffect } from "react";
import { BarChart, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Treemap } from 'recharts';
import Context from "../../../context";
import { useContext, useState } from "react";
import '../../../App.css'

function Tornado() {

const {
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
  minSquare,
  medSquare, 
  maxSquare
    } = useContext(Context)

  const data = [
    { name: 'S', min: minSquare, med: medSquare, max: maxSquare },
    { name: 'Heff', min: minHeff, med: medHeff, max: maxHeff },
    { name: 'Kp', min: minPoro, med: medPoro, max: maxPoro },
    { name: 'Ks', min: minSat, med: medSat, max: maxSat },
    { name: 'p', min: minDensity, med: medDensity, max: maxDensity },
    { name: 'Bo', min: minVolFactor, med: medVolFactor, max: maxVolFactor }
  ];
  

  const calculateQ = (S, h, poro, sat, p, vol) => {
    return S * h * poro * sat * p * vol
  };

  const medParam = {
    s: medSquare,
    heff: medHeff,
    poro: medPoro,
    sat: medSat,
    dens: medDensity,
    volfact: medVolFactor
  };
  

  const sensitivity = []

  data.forEach((el) => {
    const min = (calculateQ(medParam.s, medParam.heff, medParam.poro, medParam.sat, medParam.dens, medParam.volfact) / el.med * el.min);
    const med = calculateQ(medParam.s, medParam.heff, medParam.poro, medParam.sat, medParam.dens, medParam.volfact)
    const max = (calculateQ(medParam.s, medParam.heff, medParam.poro, medParam.sat, medParam.dens, medParam.volfact) / el.med * el.max);
    const plus = max-med
    const minus = min-med
    const delta = max-min
    
    sensitivity.push({ name: el.name, minus: minus, plus: plus, delta: delta });
  });

  const sortedSensitivity = [...sensitivity].sort((a, b) => b.delta - a.delta);


  useEffect(() => {console.log(sortedSensitivity)}, [sortedSensitivity])

    return (
      <div className="sensitivity">
        <h3 className="headers-s">Sensitivity analysis</h3>
        <BarChart
          className="tornado-plot"
          width={280}
          height={200}
          data={sortedSensitivity}
          stackOffset="sign"
          layout="vertical"
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <YAxis 
            fontSize={12} 
            dataKey="name" 
            type="category"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }} />
          <XAxis fontSize={12} type="number"/>
          {/* <Tooltip /> */}
          
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="plus" fill="#95C1C2" stackId="stack" />
          <Bar dataKey="minus" fill="#CDCDCD" stackId="stack" />
        </BarChart>

      </div>
    );
  };
  
  export default Tornado