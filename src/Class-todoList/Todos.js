import React, {useState} from 'react'

function Todos({todolist}) {
    //let todos=  [{title:'', id:1}]  
    
    return (
        <div>
             {todolist.map(
                 (item) => (<div key={item.id}>{item.title}</div>)
             )}
        </div>
    )
}

export default Todos
