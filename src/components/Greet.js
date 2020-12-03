import React from 'react'

function Greet({name , greetMsg}) {
    return (
        <div>
            {`Hello ${name} ${greetMsg}`}
        </div>
    )
}

export default Greet
