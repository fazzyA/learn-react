import React,{createContext,useState} from 'react'
export var Book = createContext();

function BookContext(props) {
const [books, setbooks] = useState(
    [    
 {name: 'Htmlcss', author: 'Jon Ducket', id:1},
{name: 'React', author: 'Dave Ceddia',id:2},
{name: 'JS', author: 'Mark',id:3}
])   
 return (
     <Book.Provider value={[books, setbooks]}>
         {props.children}
     </Book.Provider>
        
    )
}

export default BookContext
