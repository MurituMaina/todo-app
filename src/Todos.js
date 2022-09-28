import React from "react";
export default function Todos({ task, category, due_date }) {
  
  return (
    <>
      <h1>Hello</h1>
      <p>Your Task is : {task}</p>
      <h2>Task category: {category}</h2>
      <p>It is due on: {due_date}</p>
    </>
  );
}
