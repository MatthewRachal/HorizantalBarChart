import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import HorizantalBarChart from './HorizantalBarChart';

export default function Main() {
  
  const [graphData, changeGraphData] = useState([]); //Data For the Graph
  const [maxValue, changeMaxValue] = useState(0); //Max Value of Graph
  const [graphType, changeGraphType] = useState("Salary"); //Graph Type

  useEffect(() => {
      //This simulates pulling this dataset from a server etc
      let data = [
          {name: "Adam", Age: 20, Salary: 30100},
          {name: "Bob", Age: 60, Salary: 102000},
          {name: "Carla", Age: 31, Salary: 57000},
          {name: "Dave", Age: 42, Salary: 22000},
          {name: "Ethel", Age: 80, Salary: 91000},
          {name: "Frank", Age: 28, Salary: 73000},
          {name: "Gina", Age: 21, Salary: 16000},
      ]
      //First Sort the Data Highest to Low
      data.sort((a,b) => {return b[graphType] - a[graphType]});

      //Update State
      changeGraphData(data);
      changeMaxValue(data[0][graphType])

  },[graphType])

     return (
        <div className="appContainer">
            <div className="graphSectionContainer">
                <div>
                    <Dropdown graphType={graphType} changeGraphType={changeGraphType}/>
                </div>
                <h5 className="barChartHeader">Horizantal Bar Graph Ex 1</h5>
                <div style={{marginTop: "1em"}}>
                    <HorizantalBarChart changeMaxValue={changeMaxValue} maxValue={maxValue} graphType={graphType} graphData={graphData} />
                </div>
            </div>
        </div>
  );
}

