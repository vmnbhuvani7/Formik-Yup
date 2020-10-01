import React from 'react'
import '../App.css';

const TextError = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError
