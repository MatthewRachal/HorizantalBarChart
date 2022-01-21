import React from 'react';

export default function HorizantalBarChart(props) {
  
    const generateGraph = () => {
        return props.graphData.map((item,index) => {
            return (
            <div className="graphBarSection" key={index}>
                <div className="graphBarSection1">
                    <h6 className="graphBarVerticalText">{item.name}</h6>
                </div>
                {props.graphType === "Age" ?
                <div className="graphBarSection2">
                    <div className="graphBar" style={{width: `calc((${item.Age / 100}) * 100%)`}}><div className="graphSpanDiv"><span className="graphSpan">{item.Age.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></div></div>
                </div>
                : 
                <div className="graphBarSection2">
                    <div className="graphBar" style={{width: `calc((${item.Salary / 200000}) * 100%)`}}><div className="graphSpanDiv"><span className="graphSpan">{item.Salary.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></div></div>
                </div>
                }
            </div>
            )
        })   
    }

    return (
    <div className="horizantalBarChartContainer">
        {generateGraph()}
    </div>
  );
}
