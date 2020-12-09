import React, {useEffect, useState} from 'react'
import { useTransition, animated } from 'react-spring'

function Skills() {

const [state, setstate] = useState([]);
useEffect(()=>{
    setTimeout(()=>{
        setstate([...state,{title:'html', id:1},{title:'css', id:2},{title:'js', id:3}])
    }, 1000)
    // setTimeout(()=>{
    //     setstate([...state,{title:'html', id:1}])
    // }, 1000)
    // setTimeout(()=>{
    //     setstate([...state,{title:'css', id:2}])
    // }, 1000)
    // setTimeout(()=>{
    //     setstate([...state,{title:'js', id:3}])
    // }, 1000)
},[])
    const transitions = useTransition(state, state => state.id, {
        // from: { transform: 'translate3d(0,-40px,0)' },
        // enter: { transform: 'translate3d(0,0px,0)' },
        // leave: { transform: 'translate3d(0,-40px,0)' },
        from :{ marginLeft: - 500, border: 2, borderColor:'purple'},
        enter: {marginLeft: 2, border: 2, borderColor:'purple'}
    })
console.log(state)
    return (
        <>
            {
                transitions.map(
                    ({ item, props, key }) =>
                    <animated.div key={key} style={props}>{item.title}</animated.div>
                )}
            {/* <ul>
           { todolist.map(
               (item)=> (
                   <li key={item.id}>{item.title}</li>
               )
           )}
           </ul> */}
        </>
    )
}

export default Skills
