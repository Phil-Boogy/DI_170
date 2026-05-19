import { useDispatch } from "react-redux";
import { addTask } from "../Features/tasks/taskSlicer";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CreateTask = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const dateRef = useRef();

    const clickHandler = () => {
        dispatch(addTask({
            id: uuidv4(),
            name: nameRef.current.value,
            date: dateRef.current.value,
            completed: false
        }))
        nameRef.current.value = ""
        dateRef.current.value = ""

    }
    return (
        <>
            <input ref={nameRef} type="text"></input>
            <input ref={dateRef} type="date"></input>
            <button onClick={clickHandler}>+</button>
        </>
    )
}