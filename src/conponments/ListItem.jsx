import React from "react";

function ListItem(props) {
  return (
    <>
      <fieldset className="Colors">
        <legend>ListItem</legend>
        <li>
          <p>{props.task}</p>
        </li>
        <button onClick={() => props.deleteTask(props.id)}>Complete</button>
      </fieldset>
    </>
  );
}

export default ListItem;
