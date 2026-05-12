import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos)
    console.log("TodoList rendered")
    return (
        <>
            {todos.map(todo => <TodoItem key={todo.task} todo={todo} />)}
        </>
    )
}