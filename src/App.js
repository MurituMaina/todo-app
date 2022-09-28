// import logo from './logo.svg';
import "./App.css";
import Todos from "./Todos";
import Todoform from "./Todoform";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(true)
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setTodos((todos) => data);
      });
  }, [update]);
  function handleNewTodo(){
    setUpdate((update) => !update)
  }

  let todoList = todos.map((todo, ind) => {
    return <Todos key={ind} task={todo.task} category={todo.category} due_date ={todo.dueDate} />;
  });
  return (
    <div className="App">
      <h1>Todo</h1>
      <Todoform formSubmitted ={handleNewTodo}/>
      {todoList}
    </div>
  );
}

export default App;
