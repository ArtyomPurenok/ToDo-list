import React from "react"
import './ToDoString.scss'

import { changeToDoState } from "../../redux/reducer/todoReducer"
import { ReactComponent as MarkIcon } from '../Icons/MarkIcon.svg'

import {Button} from '../Button'
import { useDispatch } from "react-redux"

type Props = {
    nameString?: string
    state?: boolean
}

export const ToDoString = ({nameString, state}: Props) => {
    const dispatch = useDispatch();
    const changeState = () => {
        dispatch(changeToDoState(nameString))
    }




    return <div className="todo-string">
        <Button onClick={changeState} className={state ? 'active': ''} Icon={state ? MarkIcon: ''}/>
        <p className={state ? 'todo-string_active': ''}>{nameString}</p>
    </div>
}