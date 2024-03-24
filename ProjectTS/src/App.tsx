import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./modal";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="min-h-screen flex items-center justify-start flex-col bg-blue-400">
      <h1 className="text-center text-3xl text-white py-5 z-1 uppercase font-mono">
        Tastify!
      </h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
