import React from 'react'
import "./chart.css"
import ChartBar from './ChartBar'
function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
   <>
   <div className="chart">
    {props.dataPoints.map((datapoint)=>{
        return(
            <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
            />
        )
       
    })}
   </div>
   </>
  )
}

export default Chart