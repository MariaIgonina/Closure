import React, { useEffect } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Treemap } from 'recharts';
import Context from "../../../../context";
import { useContext, useState } from "react";

function ChartSat() {
  
  const { satJSON } = useContext(Context)

  const [ chartData, setchartData ] = useState([])

  useEffect(() => {
    if (Object.keys(satJSON).length !== 0) {
      const keys = satJSON.labels
      const values = satJSON.values
      const converted = []
      for (let i = 0; i < keys.length; i++){
        const temp = {
          name: keys[i],
          value: values[i]
        }
        converted.push(temp)
      }
        //console.log(convertedPoro)
        setchartData(converted)
    }
  }, [satJSON]
)

const roundToTwoDecimalPlaces = (num) => {
  return num.toFixed(2);
}
  
return (
  <BarChart 
        width={200} 
        height={200} 
        data={chartData} 
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }} 
        className="barchart">
      <XAxis dataKey="name" fontSize={12} tickFormatter={roundToTwoDecimalPlaces}/>
      <YAxis fontSize={12} />
      <Tooltip />
      <Bar dataKey="value" fill="#4B8180" />
    </BarChart>
  );
}
export default ChartSat;
