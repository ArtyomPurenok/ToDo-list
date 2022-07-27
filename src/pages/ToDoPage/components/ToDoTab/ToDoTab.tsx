import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import './ToDoTab.scss'

import { Button } from "../../../../components/Button";
import { ToDoString } from "../../../../components/ToDoString";
import { clearReducer, type IObject } from "../../../../redux/reducer/todoReducer";
import { useDisplayToDoList } from "../../../../hooks/useDisplayToDoList";

type ToDoTabProps = {
    windowActive?: string
}


export const ToDoTab = ({windowActive}: ToDoTabProps) => { 
    const todoData = useSelector((state: any) => state.persist.data);
    const dispatch = useDispatch();
    const arrToDos = useDisplayToDoList;



    // //tabs
    const arrTabButtons = ["All", "Active", "Completed"]
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




    return <div className={windowActive === "close" ? "todo-tab-close" : "todo-tab"}>
        <div className="todo-tab_list">
            {arr?.map((el: any) => {     
                return <ToDoString nameString={el.name} state={el.state}/>
            })}
        </div>


        <div className="todo-tab_button">
            <div>{todoData?.filter((el: IObject) => !el.state).length} items left</div>
            <div>
                {arrTabButtons.map((el: any) => {
                    return <Button className={`${el == active ? 'todo-tab_button-tab-active' : 'todo-tab_button-tab'}`} onClick={setActiveButton} dataIndex={el} text={el}/>
                })}
            </div>
            <div><Button className="todo-tab_button-clear" onClick={clearCompleted} text="Clear completed"/></div>
        </div>
    </div>
}