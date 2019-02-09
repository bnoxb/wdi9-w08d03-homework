import React from 'react'

const Gif = (props) => {
    return(
        <div>
            <h1>Gif</h1>
            <img src={props.gif.images.fixed_height.url} alt="Gif" width="300px"/>
        </div>
    )
}

export default Gif;