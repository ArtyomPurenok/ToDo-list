import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './ToDoPage.scss'

import { addToDo } from "../../redux/reducer/todoReducer"
import { Button } from "../../components/Button"
import { ToDoTab } from "./components/ToDoTab"

import { ReactComponent as ArrowDownIcon } from '../../components/Icons/ArrowDownIcon.svg'

export const ToDoPage = () => {
    const dispatch = useDispatch();

    const createToDo = (el: any) => {  
        if (el.key === 'Enter') {
            dispatch(addToDo(el.target.value))
            el.target.value = null;
        }
    }

    //close todo
    const [close, setClose] = useState('');

    const closeTab = () => {
        if (!close) {
            setClose('close')
        }else {setClose('')}
    }



    return <div className="todo">
        <div>
            <p className="todo_title">todos</p>
        </div>


        <div>
            <div className="todo_input">
                <Button className="todo_input-open" onClick={closeTab} Icon={ArrowDownIcon}/>
                <input onKeyPress={createToDo} placeholder="What need to be done?"></input>
            </div>

            <ToDoTab windowActive={close ? close : ''}/>
        </div>

    </div>
}