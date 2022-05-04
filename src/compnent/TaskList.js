import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props)=>{

    return(
        <div className="task-list">
            <ul className="container-list">
                {props.tasks.map((task)=> <TaskItem deleteTask={props.deleteTask} toggleTask={props.toggleTask} task={task} />)}
            </ul>
        </div>
    )
}

export default TaskList