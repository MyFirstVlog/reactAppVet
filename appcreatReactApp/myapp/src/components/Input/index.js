import React from 'react'

export default function Input({type='', fieldName='', onInput= () => {}}){
    return(<input 
        type={type} 
        name={fieldName} 
        id={fieldName} 
        className="form-control" 
        placeholder={fieldName}
        onInput={onInput}
    />)
}