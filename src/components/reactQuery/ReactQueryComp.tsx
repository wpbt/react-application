import HeadingThird from "../elements/HeadingThird";
import HeadingTwo from "../elements/HeadingTwo";
import ToDoRQ from "./ToDoRQ";
import ToDoUseEffect from "./ToDoUseEffect";

export default function ReactQueryComp() {
  return (
    <>
      <HeadingTwo title="React Query Demonstration" />

      <div className="mb-3">
        <HeadingThird title="Users list fetching using useEffect() in React" />
        <ToDoUseEffect />
        <HeadingThird title="Users list fetching using React Query" />
        <ToDoRQ />
      </div>
    </>
  );
}
