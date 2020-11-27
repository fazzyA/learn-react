import React, {useState} from 'react';
 function Room(){
    const [isOn, setOn] = useState(true);
    const [temp, setTemp] = useState(72);
    const onState = isOn ? 'ON':'OFF';
    let myTemp=temp;
    return(

        <div className={`gate ${isOn?"open":"closed"}` }>
            <p>The switch is <b>{onState}</b></p>
            <p>Current temperature:<b>{temp}Celsius</b></p>
            <p>Hello Toggle the button</p>
            <p><button onClick={()=>setOn(true)}>ON</button>
            <button onClick={()=>setOn(false)}>OFF</button></p>
            <p><button onClick={()=>setTemp(++myTemp)}>Increase Temp</button>
            <button onClick={()=>setTemp(--myTemp)}>Decrease Temp</button></p>
        </div>

    )
}
export default Room;