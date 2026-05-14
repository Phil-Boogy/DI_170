import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectByDate } from "../Features/tasks/taskSlicer.js"


export const SortTasks = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);
    const dateRef = useRef();
    const sortHandler = () => {
        dispatch(selectByDate({ date: dateRef.current.value }));
    }
    const clearDateHandler = () => {
        dispatch(selectByDate({ date: null }));
        dateRef.current.value = ""
    }
    return (
        <>
            <span>Sort by date <input type="date" ref={dateRef} /></span>
            <button onClick={() => sortHandler()}>sort</button>
            {selectedDate && <button onClick={() => clearDateHandler()}>clear</button>}
        </>
    );
}