import React from 'react'
import {useParams} from 'react-router-dom'
function Post() {
    let { id } = useParams();
    return (
        <>
        <h2>Post # {id}</h2>
    <h3>Requested topic ID: {id}</h3>
    </>
    )

}

export default Post
