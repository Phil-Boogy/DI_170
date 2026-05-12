import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <input type="checkbox" name="completed" onChange={() => dispatch(toggleTodo(todo.task))} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.task}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.task))}>🗑️</button>
        </div>)
};