import {  useState } from "react";

export default function Todoform({formSubmitted}) {
  const [newTodo, setNewTodo] = useState({});
  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    console.log({ [name]: value });
    setNewTodo({ ...newTodo, [name]: value });
  }
//   console.log(newTodo);
    // useEffect(()=> console.log(newTodo));

  function handleAddTodo(e) {
    e.preventDefault();
    console.log(e.target)
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        formSubmitted()
        e.target.reset()
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <h3>Add New Todo</h3>
        <label>
          Task:
          <input type="text" name="task" onBlur={handleInput}></input>
        </label>
        <label>
          Category:
          <input type="text" name="category" onBlur={handleInput}></input>
        </label>{" "}
        <label>
          Date:
          <input type="date" name="dueDate" onBlur={handleInput}></input>
        </label>
        <input type="submit" onSubmit={handleInput} />
      </form>
    </>
  );
}
