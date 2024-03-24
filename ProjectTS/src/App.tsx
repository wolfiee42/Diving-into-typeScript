import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent): void => {
    event.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-start flex-col bg-blue-400">
      <h1 className="text-center text-3xl text-white py-5 z-1 uppercase font-mono">
        Tastify!
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
