import React from "react"
import './Button.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    Icon?: any 
}


export const Button = ({className, onClick, Icon}: ButtonProps) => {
    console.log(typeof Icon);
    
    return <button
    className={`button button_${className}`}
    onClick={onClick}>
        {Icon && <Icon/>}
    </button>
}