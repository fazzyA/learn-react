import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
function Todos({ todolist }) {
  
  const transitions = useTransition(todolist, todolist => todolist.id, {
    //   from:{opacity: 1, marginLeft: -100, marginRight: 100},
    //   enter:{opacity: 1, marginLeft: 0, marginRight: 0},
    from: { transform: "translate3d(0,-40px,0)",marginLeft: -100, marginRight: 100 },
    enter: { transform: "translate3d(0,0px,0)", marginLeft: 0, marginRight: 0 },
    leave: { transform: "translate3d(0,-40px,0)", marginLeft: 0, marginRight: 0 },
  });
   transitions.map((item) => console.log(item));
//   console.log(p)
  return (
    <>
      {transitions.map(({item, key, props}) => (
        <animated.div key={key} style={props}>{item.title}</animated.div>  
      ))}
      {/* {todolist.map(
                 (item) => (<div key={item.id}>{item.title}</div>)
             )} */}
    </>
  );
}

export default Todos;
