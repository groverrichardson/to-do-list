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

    addNote = () => {
        // Add blank note field with text input
        console.log("Note added!");
    };

    deleteNote = () => {
        // Delete note in tasks array in state
    };

    editNote = () => {
        /* Replace note description with text box prefilled with current note description. When you press enter, note will update with input.  */
    };

    updateEditMode = (task) => {
        // on button click update state edit mode to on
        console.log("Now in Edit Mode...");
    };

    taskStateHandler = (task) => {
        if (task.editModeOn === true) {
            return (
                <div className="task">
                    <form>
                        <input type="text" className="task-description" />
                    </form>
                    <div className="buttons">
                        <button
                            className="button edit"
                            onClick={this.updateEditMode(task)}
                        >
                            Edit
                        </button>
                        <button className="button delete">Delete</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="task">
                    <p className="task-description">{task.description}</p>
                    <div className="buttons">
                        <button
                            className="button edit"
                            onClick={this.updateEditMode(task)}
                        >
                            Edit
                        </button>
                        <button className="button delete">Delete</button>
                    </div>
                </div>
            );
        }
        // If note is being edited show edited version, if not show actual note.
    };

    render() {
        return (
            <main className="App">
                <h1 className="title">Tapos</h1>
                <div className="headers">
                    <h2 className="task-header">Tasks</h2>
                    <button className="add-task button" onClick={this.addNote}>
                        Add Task
                    </button>
                </div>
                <div className="list">
                    <TaskList
                        tasks={this.state.tasks}
                        taskStateHandler={this.taskStateHandler}
                    />
                </div>
            </main>
        );
    }
}

export default App;
