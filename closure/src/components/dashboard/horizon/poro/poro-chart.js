import React, { useEffect } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Treemap } from 'recharts';
import Context from "../../../../context";
import { useContext, useState } from "react";

function ChartPoro() {
  
  const {poroJSON} = useContext(Context)

  const [chartData, setchartData] = useState([])



  useEffect(() => {
    if (Object.keys(poroJSON).length !== 0) {
      const keys = poroJSON.labels
      const values = poroJSON.values
      const convertedPoro = []
      for (let i = 0; i < keys.length; i++){
        // values[i] = Number(Math.round(values[i]*10)/10)
        const temp = {
          name: keys[i],
          value: values[i]
        }
        convertedPoro.push(temp)
      }
        //console.log(convertedPoro)
        setchartData(convertedPoro)
    }
  }, [poroJSON]
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
export default ChartPoro;