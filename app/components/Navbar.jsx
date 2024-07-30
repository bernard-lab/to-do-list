import { FcTodoList } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center h-16 bg-slate-800 gap-4">
      <FcTodoList className="text-4xl bg-[#800080] rounded" />
      <h1 className="text-4xl font-bold text-slate-200">My To-Do List</h1>
    </div>
  );
};

export default Navbar;
