import React, {useRef} from 'react'



const Stopwatch = () => {
    let interval;

   let  milisec = "0"
   let seconds = "0"
   let minutes = "0"
   let hours = "0"


const Milisec = useRef()
const Second = useRef()
const Minute = useRef()
const Hour = useRef()
console.log(Milisec)

const Start = ()=>{
    clearInterval(interval)
   interval = setInterval(startTimer, 10)  
}

const Stop = ()=>{
    clearInterval(interval)
}

const Reset = ()=>{
    clearInterval(interval);
    milisec = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    Milisec.current.innerHTML = milisec;
    Second.current.innerHTML = seconds;
    Minute.current.innerHTML = minutes;
    Hour.current.innerHTML = hours;

}

const startTimer = ()=>{

     milisec ++
     if(milisec <= 9){
        Milisec.current.innerHTML = "0" + milisec
     }
     if(milisec > 9){
        Milisec.current.innerHTML = milisec
     }
     if(milisec > 99){
        milisec = 0;
        Milisec.current.innerHTML = "0" + 0;
        seconds ++;
        Second.current.innerHTML = "0" + seconds 
     }
     if(seconds > 9){
        Second.current.innerHTML = seconds
     }
     if(seconds > 59){
        seconds = 0;
        Second.current.innerHTML = "0" + 0;
        minutes ++;
        Minute.current.innerHTML = "0" + minutes
     }
     if(minutes > 9){
        Minute.current.innerHTML = minutes
     }
     if(minutes > 59){
        minutes = 0;
        Minute.current.innerHTML = "0" + 0;
        hours ++;
        Hour.current.innerHTML = "0" + hours
     }
     if(hours > 9){
        Hour.current.innerHTML = hours
     }

}

  return (
    
        <>
            
            <div className='body'>
            <div className='circle'>
                    <h1 ref={Hour}>00</h1>:
                    <h1 ref={Minute}>00</h1>:
                    <h1 ref={Second}>00</h1>
                    <p ref={Milisec}>00</p>
                </div>

                <div className='thebuttons'>
                <button onClick={Start}>start</button>
                <button onClick={Stop}>stop</button>
                <button onClick={Reset}>reset</button>
                </div>
                
                

            </div>
            
        </>

  )
}



export default Stopwatch