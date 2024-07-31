"use client";

import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { MdOutlineFreeCancellation } from "react-icons/md";

export default function EditTodo({ id, task, handleEdit, handleModal }) {
  const [newTask, setNewTask] = useState(task);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-200/20">
      <div className="bg-purple-900 rounded-xl w-3/4 relative">
        <input
          value={newTask}
          placeholder="Enter new task here..."
          onChange={(e) => setNewTask(e.target.value)}
          className="m-4 rounded-full text-sm font-medium py-2 px-4 w-10/12 bg-slate-200 outline-none"
        />

        {/* Edit button */}
        <button
          className="absolute top-[1.3rem] right-[6rem]"
          onClick={() => {
            handleEdit(id, newTask);
            setNewTask("");
            handleModal();
          }}
        >
          <LuClipboardEdit className="text-2xl text-blue-700 hover:scale-110" />
        </button>

        {/* Close button */}
        <button
          className="absolute top-[1.3rem] right-[4rem]"
          onClick={handleModal}
        >
          <MdOutlineFreeCancellation className="text-2xl text-red-500 hover:scale-110" />
        </button>
      </div>
    </div>
  );
}
