import React from 'react'

export default function Input({method,value = '', type='', fieldName='', onInput= () => {}, placeholder='empty'}){
    //console.log("onInput",onInput)

    if(!method || method==='POST'){
        return(<input 

            type={type} 
            name={fieldName} 
            id={fieldName} 
            className="form-control" 
            placeholder={placeholder}
            onInput={onInput} 
            defaultValue={value}
         
            
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
            value={value}
            
            
        />
        )
    }

    
}



/**
 * import React from 'react'

export default function Input({method,value = '', type='', fieldName='', onInput= () => {}, placeholder='empty'}){
    //console.log("onInput",onInput)

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
 */