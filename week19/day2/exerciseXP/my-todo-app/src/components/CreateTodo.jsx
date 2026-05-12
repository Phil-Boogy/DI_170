import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import { useRef } from "react";

export const CreateTodo = () => {
    const dispatch = useDispatch();
    const tasknameRef = useRef();
    return (
        <>
            <input placeholder="Write a todo..." ref={tasknameRef} />
            <button onClick={
                () => {
                    dispatch(addTodo(tasknameRef.current.value))
                    tasknameRef.current.value = ""
                }}>+ Add</button>
        </>
    );
}