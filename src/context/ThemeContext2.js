import React, {createContext, useState} from 'react'
export const TC = createContext();

function ThemeContext2(props) {
    const [state, setstate] = useState({
        isLight: false,
        light: { text: 'black', bg: 'white' },
        dark: { text: 'white', bg: 'black' },
        num:20
    })
    return (
        <TC.Provider value={[state,setstate]}>
            {props.children}
        </TC.Provider>
        
    )
}

export default ThemeContext2
