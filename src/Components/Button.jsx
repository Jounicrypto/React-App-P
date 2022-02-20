import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick={props.btnFunction}>{props.btnName}</button>
        </div>
    )
}

export default Button