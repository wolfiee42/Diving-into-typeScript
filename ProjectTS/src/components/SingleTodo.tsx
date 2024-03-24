import React from "react";
import { Todo } from "../modal";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
};
const SingleTodo: React.FC = ({ todo, todos, setTodos }: Props) => {
  return (
    <div className="w-[350px] h-12 bg-yellow-400 flex flex-row justify-around items-center mt-3 rounded-full">
      <h3 className="text-xl flex-grow px-3">{todo.todo}</h3>
     <div className="flex flex-row gap-1 justify-center items-center">
     <button className={iconClass}>
        <CiEdit />
      </button>
      <button className={iconClass}>
        <RiDeleteBin5Line />
      </button>
      <button className={`${iconClass} mr-3`}>
        <AiOutlineCheck />
      </button>
     </div>
    </div>
  );
};

const iconClass = "bg-blue-400 w-8 h-8 text-white flex justify-center items-center rounded-full hover:cursor-pointer hover:opacity-85 "

export default SingleTodo;
