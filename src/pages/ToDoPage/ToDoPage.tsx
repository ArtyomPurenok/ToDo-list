import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import './ToDoPage.scss'

import { addToDo } from "../../redux/reducer/todoReducer";
import { clearReducer } from "../../redux/reducer/todoReducer";
import { ToDoString } from "../../components/ToDoString";
import { Button } from "../../components/Button";
import { useDisplayToDoList } from "../../hooks/useDisplayToDoList";

export const ToDoPage = () => {
    const todoData = useSelector((state: any) => state.persist.data);
    const dispatch = useDispatch();
    const arrToDos = useDisplayToDoList;


    const createToDo = (el: any) => {
        if (el.key === 'Enter') {
            dispatch(addToDo(el.target.value))
            el.target.value = null;
        }
    }

    //tabs
    const arrButtons = ["All", "Active", "Completed"]
    const [ active, setActive ] = useState("All");
    const [arr, setArr] = useState<Object[] | undefined>(undefined)

    const setActiveButton = (el: any) => {
        setActive(el.target.dataset.index);
    }

    useEffect(() => {
        setArr(arrToDos({arr: todoData, key: active})); 
             
    }, [todoData, active])


    //clear
    const clearCompleted = () => {
        dispatch(clearReducer())
    }





    return <div className="todo">
        <div className="todo_title">
            <h1>todos</h1>
        </div>


        <div className="todo_input">
            <input onKeyPress={createToDo}></input>
        </div>


        <div className="todo_list">
            {arr?.map((el: any) => {
                return <ToDoString nameString={el.name} state={el.state}/>
            })}
        </div>


        <div>
            <div>{todoData?.filter((el: any) => !el.state).length} items left</div>
            <div>
                {arrButtons.map((el: any) => {
                    return <Button className={`${el == active ? 'todo_button-active' : 'todo_button'}`} onClick={setActiveButton} dataIndex={el} text={el}/>
                })}
            </div>
            <div><button onClick={clearCompleted}></button></div>
        </div>
    </div>
}