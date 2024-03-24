import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="relative"
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        type="unput"
        className="w-[400px] h-16 rounded-full pl-10"
      />
      <button
        className="absolute w-12 h-12 bg-blue-400 right-3 top-2 rounded-full text-white shadow-md"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
