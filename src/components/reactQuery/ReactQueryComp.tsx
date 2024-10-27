import ToDoUseEffect from "./ToDoUseEffect";

export default function ReactQueryComp() {
  return (
    <>
      <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
        React Query Demonstration
      </h2>

      <div className="mb-3">
        <h3 className="text-lg mb-3 text-md text-white font-semibold bg-slate-600 px-2 rounded-lg py-1">
          To-do list fetching using useEffect() in React
        </h3>
        <ToDoUseEffect />
      </div>
    </>
  );
}
