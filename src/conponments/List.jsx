import React from "react";
import ListItem from "./ListItem";
function List(props) {
  return (
    <>
      <fieldset>
        <legend>List</legend>
        <p>Some list</p>
        {props.tasks.map((task) => (
          <ListItem
            deleteTask={props.deleteTask}
            task={task.task}
            id={task.id}
            key={task.id}
          ></ListItem>
        ))}
      </fieldset>
    </>
  );
}

export default List;
