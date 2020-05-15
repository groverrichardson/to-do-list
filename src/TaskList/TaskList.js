import React from "react";
import Task from "../Task/Task";
import "./App.css";

class TaskList extends React.Component {
    render() {
        console.log(this.props.tasks);
        return (
            <div>
                {this.props.tasks.map((task, i) => (
                    <Task task={task} key={i} />
                ))}
            </div>
        );
    }
}

export default TaskList;
