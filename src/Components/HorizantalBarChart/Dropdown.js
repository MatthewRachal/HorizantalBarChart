import React from 'react';

export default function Dropdown(props) {
  return (
  <div className="dropdownContainer">
        <h5 className="dropdownHeader">Graph Type</h5>
        <div className="dropdown">
            <button className="dropdownButton">{props.graphType}</button>
            <div className="dropdownContent">
                <li className="filterLi" onClick={e=>{e.preventDefault(); props.changeGraphType("Age")}}>Age</li>
                <li className="filterLi" onClick={e=>{e.preventDefault(); props.changeGraphType("Salary")}}>Salary</li>
            </div>
        </div>
    </div>
  );
}
