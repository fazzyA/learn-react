import React, { useState } from 'react'
import './styles.css'
import Trail from './Trail'
function SlideText() {
    const [open, set] = useState(true)
    return (
      <Trail open={open} onClick={() => set((state) => !state)}>
        <span>Lorem</span>
        <span>Ipsum</span>
        <span>Dolor</span>
        <span>Sit</span>
      </Trail>
    )
  }
  


export default SlideText