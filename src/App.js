import React from "react";
import TaskList from "./TaskList/TaskList";
import Tasks from "./sample-data";
import "normalize.css";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: Tasks.tasks,
        };
    }

    render() {
        return (
            <main className="App">
                <h1 className="title">Tapos</h1>
                <h2 className="task header">Tasks</h2>
                <h2 className="add-task">Add Task</h2>
                <TaskList tasks={this.state.tasks} />
            </main>
        );
    }
}

export default App;
