import React, { useState } from "react";
import TodoRemove from "./todoRemove";

const TodoApp = () => {
  const [addInput, setInput] = useState("");
  const [addTasks, setTask] = useState([]);
  const [iseditId, setId] = useState("");

  // getting value from input
  const addEvent = (e) => {
    setInput(e.target.value);
  };

  // adding value in tasks
  const addTask = () => {
    const addNewItem = {
      id: new Date().getTime().toString(),
      name: addInput,
    };
    setTask([addNewItem, ...addTasks]);
    setInput("");
  };

  // updating value back toward field
  const updateItem = (id) => {
    const updateTask = addTasks.find((task) => {
      return task.id === id;
    });
    setInput(updateTask.name);
    setId(updateTask.id);
  };

  // adding updated task back to its place
  const itemUpdated = () => {
    setTask(
      addTasks.map((task) => {
        if (task.id === iseditId) {
          return { ...task, name: addInput };
        }
        return task;
      })
    );
    setInput("");
    setId("");
  };

  // deleting task
  const deleteItem = (id) => {
    setTask((oldTasks) => {
      return oldTasks.filter((taskElement) => {
        return taskElement.id !== id;
      });
    });
  };

  return (
    <div className="mainDiv">
      <div className="placeholderDiv">
        <input
          type="text"
          placeholder="Add your Tasks"
          value={addInput}
          onChange={addEvent}
        />
        {iseditId === "" ? (
          <button className="m-2 btn btn-warning" onClick={addTask}>
            {" "}
            +{" "}
          </button>
        ) : (
          <button className="m-2 btn btn-warning" onClick={itemUpdated}>
            {" "}
            Update{" "}
          </button>
        )}
      </div>
      <div>
        <ul className="list-group justify-content-center">
          {addTasks.map((allTasks, ind) => {
            return (
              <TodoRemove
                key={allTasks.id}
                id={addTasks[ind].id}
                text={allTasks.name}
                onRemove={deleteItem}
                onUpdate={updateItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
