"use client";

import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import EditTodo from "./EditTodo";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState();
  const [editId, setTEditId] = useState(0);
  const [tasks, setTasks] = useState([]);

  const [editModal, setEditModal] = useState(false);

  const handleModal = () => {
    setEditModal(!editModal);
  };

  function handleAdd(e) {
    e.preventDefault();
    setTasks([...tasks, { id: uuidv4(), taskName: todo }]);
    setTodo("");
  }

  function handleEdit(index, task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === index) {
          return { ...t, taskName: task };
        } else {
          return t;
        }
      })
    );
  }

  return (
    <div className="text-center mt-4 bg-slate-500/50 w-full rounded-t-2xl p-4 text-slate-800">
      <h1 className="text-4xl p-2 font-semibold ">To-Do</h1>
      <form className="relative w-full" onSubmit={handleAdd}>
        <input
          type="text"
          value={todo}
          placeholder="Enter to-do here..."
          className="m-4 rounded-full text-sm font-medium py-2 px-4 w-10/12 bg-slate-200 outline-none text-slate-950"
          onChange={(e) => setTodo(e.target.value)}
          required
        />

        {/* Add Task Button */}
        <button className="absolute top-[1.3rem] right-[4rem]">
          <MdFormatListBulletedAdd
            type="submit"
            className="text-2xl text-blue-700 hover:scale-110"
          />
        </button>
      </form>

      <div className="bg-slate-400 flex justify-center items-end my-2 rounded-md">
        <ul className="w-full py-2 mx-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center pt-1 px-2 my-2 border-b-2 border-slate-300"
            >
              <span>{task.taskName}</span>

              {/* Edit button */}
              <span className="mt-0 items-center">
                <button
                  className="text-cyan-900 hover:scale-125 mx-2"
                  onClick={() => {
                    setEditTodo(task.taskName);
                    setTEditId(task.id);
                    handleModal();
                  }}
                >
                  <LuClipboardEdit />
                </button>

                {/* Delete button */}
                <button
                  className="text-[#800080] hover:scale-125 ml-2"
                  onClick={() => {
                    const confirm = window.confirm(
                      "Do you want to delete this task?"
                    );
                    confirm && setTasks(tasks.filter((t) => t.id !== task.id));
                  }}
                >
                  <RiDeleteBin5Fill />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      <div>
        {editModal && (
          <EditTodo
            id={editId}
            task={editTodo}
            tasks={tasks}
            handleModal={handleModal}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
}
