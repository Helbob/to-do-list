import React from "react";

function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }
  return (
    <>
      <fieldset>
        <form onSubmit={submit}>
          <legend>Form</legend>
          <input type="text" name="task" /> <button>Add</button>
        </form>
      </fieldset>
    </>
  );
}

export default Form;
