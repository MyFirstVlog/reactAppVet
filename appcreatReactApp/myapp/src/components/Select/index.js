import React from "react";

export default function Select({options = [], fieldName='empty', onChange = () => {}}) {
  console.log('onChange', {options})
  return (
    <div className="row">
      <div className="col">
        <select
          onChange= {onChange}
          id="kind"
          className="form-select"
          aria-label="Default select example"
        >
          <option value = ''> {fieldName} </option>
          {
            
            options.map(({tag}, index)=>{
              console.log('tag',tag,index)
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
