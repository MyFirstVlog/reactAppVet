import React from "react";

export default function Select({method,value='', options = [], fieldName='empty', onChange = () => {}, placeholder='empty'}) {
  if(!method || method==='POST'){
    return (
      <div className="row">
        <div className="col">
          <select
            onChange= {onChange}
            id="kind"
            className="form-select"
            name={fieldName}
            value=''
            
          >
            <option value = ""> {placeholder} </option>
            {
              
              options.map(({tag}, index)=>{
               
              })
            }
            {
            options.map(({tag}, index)=>(              
                <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="row">
        <div className="col">
          <select
            onChange= {onChange}
            id="kind"
            className="form-select"
            name={fieldName}
            value={value}
            
          >
            <option value = ""> {placeholder} </option>
            {
              
              options.map(({tag}, index)=>{
               
              })
            }
            {
            options.map(({tag}, index)=>(              
                <option keys={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  
}
