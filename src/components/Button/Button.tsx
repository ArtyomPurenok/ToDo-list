import React from "react"
import './Button.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    Icon?: any
    text?: string
    dataIndex?: string
}


export const Button = ({className, onClick, Icon, text, dataIndex}: ButtonProps) => {
    return <button
    data-index={dataIndex}
    className={className}
    onClick={onClick}>

        {Icon && <Icon/>}
        {text}
    </button>
}