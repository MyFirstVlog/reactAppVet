import React from 'react'

export default function Input({type='', fieldName=''}){
    return(<input 
        type={type} 
        name={fieldName} 
        id={fieldName} 
        className="form-control" 
        placeholder={fieldName}
    />)
}