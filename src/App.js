import React from "react";
import TaskList from "./TaskList/TaskList";

function App() {
    return (
        <main className="App">
            <h1 className="task header">Tasks</h1>
            <h1 className="add-task">Add Task</h1>
            <TaskList />
        </main>
    );
}

export default App;
