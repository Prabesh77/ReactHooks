import React, { useState, useEffect } from "react";
import "./Bootstrap/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [persons, setPersons] = useState([
    {
      name: "Prabesh",
      completed: false
    },
    {
      name: "Arnold",
      completed: false
    },
    {
      name: "Mark",
      completed: false
    },
    {
      name: "Steve",
      completed: false
    }
  ]);

  const addTodo = myName => {
    const newPerson = [...persons, { name: myName, completed: false }];
    setPersons(newPerson);
  };

  // useEffect(() => {
  //   console.log("Useeffect");
  // });

  const deleteItem = index => {
    const items = [...persons];
    items.splice(index, 1);
    setPersons(items);
  };

  const completedItem = index => {
    const items = [...persons];
    items[index].completed = !items[index].completed;
    setPersons(items);
  };

  return (
    <div className="text-center mt-5 ">
      <AddTodo handleSubmit={addTodo} />
      {persons.map((person, index) => (
        <TodoItem
          person={person}
          index={index}
          key={index}
          handleDelete={deleteItem}
          handleCompleted={completedItem}
          id={index}
        />
      ))}
    </div>
  );
}

function TodoItem({ person, index, handleDelete, handleCompleted }) {
  return (
    <ul
      className="paragraph m-3 bg-warning mx-auto my-0"
      style={{ textDecoration: person.completed ? "line-through" : "none" }}>
      <li className="py-1">
        <span className="index"> {index + 1}.</span>
        {person.name}
        <button
          className="btn btn-danger btn-sm del-btn mt--1"
          onClick={() => handleDelete(index)}>
          Delete
        </button>
        <button
          className="btn btn-success btn-sm com-btn del-btn"
          onClick={() => handleCompleted(index)}>
          Completed
        </button>
      </li>
    </ul>
  );
}

function AddTodo({ handleSubmit }) {
  const [currentInput, setCurrentInput] = useState("");

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!currentInput) return;
    handleSubmit(currentInput);
    setCurrentInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Add smart peoples..."
          value={currentInput}
          onChange={e => setCurrentInput(e.target.value)}
        />
      </form>
    </div>
  );
}
