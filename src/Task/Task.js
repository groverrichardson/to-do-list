import React from "react";
import "./App.css";

function Task(props) {
    return (
        <div>
            <p className="task-description">{props.task.description}</p>
            <button className="button edit">Button</button>
            <button className="button delete">Delete</button>
        </div>
    );
}

export default Task;
