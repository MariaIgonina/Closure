import React, { useEffect } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import Context from "../../../context";
import { useContext, useState } from "react";

function ChartRes() {
  
  const {reservesJSON, minRes, medRes, maxRes } = useContext(Context)

  const [chartData, setchartData] = useState([])

  
  useEffect(() => {
    if (Object.keys(reservesJSON).length !== 0) {
      const keys = reservesJSON.labels
      const values = reservesJSON.values
      const converted = []
      for (let i = 0; i < keys.length; i++){
        const temp = {
          name: keys[i],
          value: values[i]
        }
        converted.push(temp)
      }
      setchartData(converted)
    }
  }, [reservesJSON])
  
  const roundToInteger = (num) => {
    return Math.round(num);
  }

  return (
    <div className="reserves-box">
      <h3 className="headers">Final reserves of oil, k t</h3>
      <BarChart 
          width={200} 
          height={200} 
          data={chartData} 
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          padding={{ top: 0, right: 0, left: 0, bottom: 0 }} 
          className="barchart">
        <XAxis dataKey="name" fontSize={12} tickFormatter={roundToInteger}/>
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar dataKey="value" fill="#4B8180" />
      </BarChart>
      <div className="param-info">
        <div className="col-params">
          <p className='minmedmax'>Minumum</p>
          <p className='min-digit'>{minRes}</p>
        </div>
        <div className="col-params">
          <p className='minmedmax'>Most probable</p>
          <p className='med-digit'>{medRes}</p>
        </div>
        <div className="col-params">
          <p className='minmedmax'>Maximum</p>
          <p className='max-digit'>{maxRes}</p>
        </div>
        </div>
      </div>

  );
}
export default ChartRes;
