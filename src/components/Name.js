import React from 'react'
import Greet from './Greet'

function Name({name , greetMsg}) {
    return (
        <div>
            <Greet name={name} greetMsg={greetMsg} />
        </div>
    )
}

export default Name
