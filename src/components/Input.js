import React from 'react'
import './style.css'

export default function Input({startTime}) {
  return (
    <div>
        <label>Enter here</label>
        <input type='number' placeholder='60' 
        onKeyDown={(e) => {
            if(e.which === 13 || e.keyCode === 13){
                startTime && startTime(Math.floor(e.target.value))
            }
        }  
         }/>
    </div>
  )
}
