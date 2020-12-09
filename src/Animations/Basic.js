import React from 'react'
import {useSpring, animated} from 'react-spring'
function Basic() {
    const props = useSpring(
        {
            from: {marginLeft: -100},
            to: {marginLeft: 0} ,
        }
    )
    return (
        <div>
            <animated.h1 style={props}>Faiza Aziz Khan</animated.h1>
        </div>
    )
}

export default Basic
