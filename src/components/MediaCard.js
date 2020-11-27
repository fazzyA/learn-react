import React from 'react'

export default function MediaCard({title, body,imageUrl}) {
    return (
        <div style={{width: 'max-content',margin:'5px auto', border:'2px solid red'}}>
            <h2>{title}</h2>
            <p>{body}</p>
            <img width='100px' src={imageUrl} alt='' />
        </div>
    )
}
