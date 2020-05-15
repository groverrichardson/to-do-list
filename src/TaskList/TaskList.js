import React from "react";
import Tasks from "../sample-data";

class TaskList extends React.Component {
    render() {
        function renderTasks() {
            Object.values(Tasks)[0].map((i) => {
                console.log("hi");
            });
        }
        renderTasks();
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

export default TaskList;
