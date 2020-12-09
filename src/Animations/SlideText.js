import React, { useState } from 'react'
import './styles.css'
import Trail from './Trail'
function SlideText() {
    const [open, set] = useState(true)
    return (
      <Trail open={open} onClick={() => set((state) => !state)}>
        <span>Suahela</span>
        <span>Nadeem</span>
        {/* <span className=''>Freelance React dev</span> */}
      </Trail>
    )
  }
  


export default SlideText