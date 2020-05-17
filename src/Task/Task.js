import React from "react";
import "../../src/App.css";

function Task(props) {
    return (
        <div className="task-container">
            {props.taskStateHandler(props.task)}
        </div>
    );
}

export default Task;
