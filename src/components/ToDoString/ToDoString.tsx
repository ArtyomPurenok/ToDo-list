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
        <Button onClick={changeState} className={state ? 'todo-string_button-active': 'todo-string_button'} Icon={state ? MarkIcon: ''}/>
        <p className={state ? 'todo-string_text-active': ''}>{nameString}</p>
    </div>
}