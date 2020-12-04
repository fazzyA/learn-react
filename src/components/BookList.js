import React, {useContext, useState} from 'react'
import { Book } from '../context/BookContext';
import {ThemeContext} from '../context/ThemeContext'
function BookList() {
    const {isLight, light, dark}= useContext(ThemeContext);
    const [books , setbooks] = useContext(Book);
    var nextId= books.length +1;
    console.log(books)
    const ui = isLight ? light : dark;
    //console.log(ui)

    return (
        //{name: 'newbook', author: 'xyz'}
        <div style={{backgroundColor: ui.bg, color: ui.text}}>
            <button onClick={()=>setbooks([...books,{name:'sds',author:'sdasd', id:nextId}])}>Add</button>
            <ul >
                {books.map((item)=>(

                <li key={item.id}>{`${item.name} is written by ${item.author}`}</li>
               )
                )}
            </ul>
        </div>
    )
}

export default BookList
