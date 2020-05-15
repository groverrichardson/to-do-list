import React from "react";
import { tsPropertySignature } from "@babel/types";

function Task(props) {
    return (
        <div>
            <p className="task-description">{props.description}</p>
            <button className="button edit">Button</button>
            <button className="button delete">Delete</button>
        </div>
    );
}

export default Tasks;
