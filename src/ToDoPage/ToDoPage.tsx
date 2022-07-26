import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import './ToDoPage.scss'

import { addToDo } from "../redux/reducer/todoReducer";
import { ToDoString } from "../components/ToDoString";

export const ToDoPage = () => {
    const todoData = useSelector((state: any) => state.persist.data);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(todoData);
    }, [todoData])

    const createToDo = (el: any) => {
        if (el.key === 'Enter') {
            dispatch(addToDo(el.target.value))
            el.target.value = null;
        }
    }






    return <div className="todo">
        <div className="todo_title">
            <h1>todos</h1>
        </div>

        <div className="todo_input">
            <input onKeyPress={createToDo}></input>
        </div>

        <div className="todo_list">
            {todoData?.map((el: any) => {
                return <ToDoString nameString={el.name} state={el.state}/>
            })}
        </div>

        <div>
            <div>остаток</div>
            <div>tabs button</div>
            <div>clear</div>
        </div>
    </div>
}