import React, {useContext, useState} from 'react'
import {TC} from '../context/ThemeContext2'

function BookList2() {

    const [state, setstate]= useContext(TC);
    const {isLight,light,dark} = state
    const ui = isLight ? light : dark;
    console.log(state)

 const [books, setbooks] = useState([
     {name: 'Htmlcss', author: 'Jon Ducket'},
     {name: 'React', author: 'Dave Ceddia'},
     {name: 'JS', author: 'Mark'}
 ])
    return (
        <div style={{backgroundColor: ui.bg, color: ui.text}}>
            <button onClick={()=>setstate({...state, num:11})}>Change</button>
            <ul >
                {books.map((item)=>(

                <li key={item.name}>{`${item.name} is written by ${item.author}`}</li>
               )
                )}
            </ul>
        </div>
    )
}

export default BookList2
