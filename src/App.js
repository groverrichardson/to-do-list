import React from "react";
import TaskList from "./TaskList/TaskList";
import Tasks from "./sample-data";
import "normalize.css";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: Tasks.tasks,
            numberOfTasks: Tasks.tasks.length,
            inputValue: "",
        };
    }

    addTask = () => {
        const taskNumber = this.state.numberOfTasks + 1;
        const newTask = {
            id: taskNumber,
            description: `Task #${taskNumber}`,
            editModeOn: true,
        };
        this.turnOffEditMode(newTask);
        this.updateInputValue(`Task #${taskNumber}`);
        const currentArray = this.state.tasks;
        this.setState({
            tasks: currentArray.concat(newTask),
            numberOfTasks: taskNumber,
        });
    };

    deleteTask = (task) => {
        const taskNumber = this.state.numberOfTasks - 1;
        this.setState({
            tasks: this.state.tasks.filter((item) => item.id !== task.id),
            numberOfTasks: taskNumber,
        });
    };

    updateInputValue = (value) => {
        this.setState({
            inputValue: value,
        });
        console.log("Value updated");
    };

    turnOffEditMode = (task) => {
        this.state.tasks.map((item) => {
            if (item.id !== task.id) {
                item.editModeOn = false;
            }
        });
    };

    editTask = (task) => {
        //Take the current description and update inputValue in state and have the text of input field prefilled with input value.
        this.turnOffEditMode(task);
        const currentValue = task.description;

        this.updateInputValue(currentValue);

        const updatedArray = this.state.tasks.map((item) => {
            if (item.id === task.id) {
                item.editModeOn = true;
                item.description = currentValue;
            }
            return item;
        });
        this.setState({
            tasks: updatedArray,
        });
        console.log("State Set");
    };

    saveTask = (task) => {
        this.setState({
            tasks: this.state.tasks.map((item) => {
                if (item.id === task.id) {
                    item.description = this.state.inputValue;
                    item.editModeOn = false;
                }
                return item;
            }),
        });
        console.log(this.state.tasks);
    };

    updateForm = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
        console.log(e.target.value);
    };

    taskStateHandler = (task) => {
        if (task.editModeOn === true) {
            return (
                <div className="task">
                    <input
                        type="text"
                        className="task-description"
                        value={this.state.inputValue}
                        onChange={(e) => {
                            this.updateForm(e);
                        }}
                    />
                    <button
                        className="save button"
                        onClick={() => {
                            this.saveTask(task);
                        }}
                    >
                        Save
                    </button>
                    <div className="buttons">
                        <button
                            className="button delete"
                            onClick={() => {
                                this.deleteTask(task);
                            }}
                        >
                            Delete
                        </button>
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
                            onClick={() => {
                                this.editTask(task);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="button delete"
                            onClick={() => {
                                this.deleteTask(task);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <main className="App">
                <h1 className="title">Tapos</h1>
                <div className="headers">
                    <h2 className="task-header">Tasks</h2>
                    <button className="add-task button" onClick={this.addTask}>
                        Add Task
                    </button>
                </div>
                <div className="list">
                    <TaskList
                        tasks={this.state.tasks}
                        taskStateHandler={this.taskStateHandler}
                        numberOfTasks={this.state.numberOfTasks}
                    />
                </div>
            </main>
        );
    }
}

export default App;
