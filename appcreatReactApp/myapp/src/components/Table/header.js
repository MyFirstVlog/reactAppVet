import React from 'react'

export default function Header(props){
    if (props.columns.length !== 0){
        return (
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {
                        props.columns.map((col,index)=>(<th key={index} scope="col">{col}</th>))
                    }
                    <th scope="col"/>
                </tr>
            </thead>
        )
    }else{
        return null
    }
    
}