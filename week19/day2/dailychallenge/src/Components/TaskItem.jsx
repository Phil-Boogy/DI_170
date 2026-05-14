import { useDispatch } from "react-redux";
import { useState } from "react";
import { editTask } from "../Features/tasks/taskSlicer.js";
import { completeTask } from "../Features/tasks/taskSlicer.js";
import { deleteTask } from "../Features/tasks/taskSlicer.js";

export const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({ isEditing: false, editName: task.name, editDate: task.date });

    const nameHandler = (e) => {
        setState({ ...state, editName: e.target.value })
    };

    const dateHandler = (e) => {
        setState({ ...state, editDate: e.target.value })
    };

    const doneHandler = () => {
        dispatch(editTask({ id: task.id, name: state.editName, date: state.editDate }));
        setState({ ...state, isEditing: false });
    }

    const completeHandler = () => {
        dispatch(completeTask({ id: task.id }))
    }

    const deleteHandler = () => {
        dispatch(deleteTask({ id: task.id }))
    }

    if (!state.isEditing)
        return (
            <div>
                <button onClick={() => completeHandler()}>{task.completed ? "✅" : "🔲"}
                </button>
                <span>
                    {task.name} | {task.date}
                </span>
                <button onClick={() => setState({ ...state, isEditing: true })}>✏️</button>
                <button onClick={() => deleteHandler()}>🗑️</button>
            </div>)
    if (state.isEditing)
        return (
            <div>
                <input type="date" value={state.editDate} onChange={dateHandler} ></input>
                <input type="text" value={state.editName} onChange={nameHandler}></input>
                <button onClick={doneHandler}>Done</button>

            </div>)
};