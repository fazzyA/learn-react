import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'

function Animate() {
    const [toggle, settoggle] = useState(true)
    const props = useSpring({opacity: toggle ? 1 : 0})

    return (
        <>
        <button onClick={()=>settoggle(!toggle)}>Toggle</button>
    <animated.div style={props}>i will fade</animated.div>
    </>
    )
}

export default Animate
