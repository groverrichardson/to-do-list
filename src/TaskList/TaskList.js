import React from "react";
import Task from "../Task/Task";
import "../../src/App.css";

class TaskList extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task, i) => (
                    <Task
                        task={task}
                        key={i}
                        taskStateHandler={this.props.taskStateHandler}
                    />
                ))}
            </div>
        );
    }
}

export default TaskList;
