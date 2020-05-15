import React from "react";
import "../../src/App.css";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.taskStateHandler);
        return (
            <div className="task">
                {this.props.taskStateHandler(this.props.task)}
            </div>
        );
    }
}

export default Task;
