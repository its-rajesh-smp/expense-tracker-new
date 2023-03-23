import React from 'react';
import "./Chart.css"
import CharBar from '../ChartBar/ChartBar';


function Chart(props) {

    // Storing Data for easy to handle purpose
    let Data=props.data;

    // For Store Month total
    let monthData=[0,0,0,0,0,0,0,0,0,0,0,0]

    // Update the month total
    Data.forEach((value,i)=>{
        let getDate=new Date(value.date).getMonth()
        monthData[getDate]=parseInt(monthData[getDate])+ parseInt(value.price)
    })

    // Max in month total
    let max=Math.max(...monthData)

    // New Array for data points
    let dataPoints=monthData.map((value)=>{
        let cal=value/max
        // Just Checking because something devideby 0 is NaN
        if(isNaN(cal)){cal=0}
        return (cal*200)
    })

    console.log(dataPoints);
    

    return ( 
        <div className='Chart-div' >
            <CharBar style={{height:dataPoints[0]+"px"}} month="Jan" />
            <CharBar style={{height:dataPoints[1]+"px"}} month="Feb" />
            <CharBar style={{height:dataPoints[2]+"px"}} month="Mar" />
            <CharBar style={{height:dataPoints[3]+"px"}} month="Apr" />
            <CharBar style={{height:dataPoints[4]+"px"}} month="May" />
            <CharBar style={{height:dataPoints[5]+"px"}} month="Jun" />
            <CharBar style={{height:dataPoints[6]+"px"}} month="Jul" />
            <CharBar style={{height:dataPoints[7]+"px"}} month="Aug" />
            <CharBar style={{height:dataPoints[8]+"px"}} month="Sep" />
            <CharBar style={{height:dataPoints[9]+"px"}} month="Oct" />
            <CharBar style={{height:dataPoints[10]+"px"}} month="Nov" />
            <CharBar style={{height:dataPoints[11]+"px"}} month="Dec" />

        </div>
    );
}

export default Chart;