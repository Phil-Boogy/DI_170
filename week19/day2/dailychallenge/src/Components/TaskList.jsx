import { useSelector } from "react-redux";
import { TaskItem } from "./TaskItem"


export const TaskList = () => {
    const tasks = useSelector((state) => state.planner.tasks);
    const selectedDate = useSelector((state) => state.planner.selectedDate);
    const tasksByDate = tasks.filter(task => task.date === selectedDate);

    if (!selectedDate)
        return (
            <>
                {tasks.map(task => <TaskItem key={task.id} task={task} />)}
            </>
        )

    if (selectedDate)
        return (
            <>
                {tasksByDate.map(task => <TaskItem key={task.id} task={task} />)}
            </>
        )
}