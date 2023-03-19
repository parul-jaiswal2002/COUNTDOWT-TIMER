import React, { useState } from 'react'
import Input from './Input'
import './style.css'

export default function Countdown() {
    let [currtime, setCurrTime] = useState(0)
    let [intervalId, setIntervalId] = useState(null)
    const startNewTimer = () => {
        setIntervalId(setInterval(() => {
            setCurrTime(time => {
                if(time > 0){
                    return time-1;
                }
                else{
                    destroyTimer()
                    
                    return time ;
                }
            })
        }, 1000))
    }
    const destroyTimer = () => {
        if(intervalId){
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }
    const startTimer =(timeInseconds) => {
        if(currtime){
            destroyTimer()
        }
        setCurrTime(timeInseconds)
        startNewTimer()
     }
   

   
  return (
    <>
    <Input startTime={startTimer}/>
    <div id="displayTime">{currtime}</div>
    </>
  )
}

