import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div className="relative">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        type="text"
        className="w-[400px] h-16 rounded-full pl-10"
      />
      <button className="absolute w-12 h-12 bg-blue-400 right-3 top-2 rounded-full text-white shadow-md">
        Go
      </button>
    </div>
  );
};

export default InputField;
