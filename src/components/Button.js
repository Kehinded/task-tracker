import React from 'react'

const Button = ({text, color, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor: color}} className= 'button'>{text}</button>
}

export default Button
