import React from 'react'

export default function Input({method,value = '', type='', fieldName='', onInput= () => {}, placeholder='empty'}){
    

    if(!method || method==='POST'){
        return(<input 
            type={type} 
            name={fieldName} 
            id={fieldName} 
            className="form-control" 
            placeholder={placeholder}
            onInput={onInput} 
            value='' 
        />
        )
    }else{
        return(<input 
            type={type} 
            name={fieldName} 
            id={fieldName} 
            className="form-control" 
            placeholder={placeholder}
            onInput={onInput}
            value= {value}
        />
        )
    }

    
}