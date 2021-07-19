import React from "react";

const TodoRemove = (props) => {
  return (
    <div>
      <div className="input-group-prepend justify-content-center">
        <button
          onClick={() => props.onRemove(props.id)}
          className="m-2 btn btn-warning"
        >
          x
        </button>
        <li className="list-group-item m-2">{props.text}</li>
        <button
          onClick={() => props.onUpdate(props.id)}
          className="m-2 btn btn-warning"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default TodoRemove;
