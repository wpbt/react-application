import { useState } from "react";
import { produce } from "immer";
import LinkInfo from "./LinkInfo";

interface Props {
  title: string;
}

interface Bug {
  id: number;
  title: string;
  fixed: boolean;
}

export default function ImmerExample({ title }: Props) {
  let obj = [
    { id: 1, title: "Object is not cloning properly", fixed: false },
    { id: 2, title: "Array is not cloning properly", fixed: false },
    { id: 3, title: "Component is not cloning properly", fixed: false },
    { id: 4, title: "Element is not cloning properly", fixed: false },
  ];

  const [bugs, setBugs] = useState(obj);

  const handleFix = (bug: Bug) => {
    setBugs(
      produce((draft) => {
        let result = draft.find((item) => item.id === bug.id);
        if (result) {
          result.fixed = true;
        }
      })
    );
  };

  const handleDelete = (bug: Bug) => {
    setBugs(produce((draft) => draft.filter((item) => item.id !== bug.id)));
  };

  return (
    <>
      <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
        {title}
      </h2>
      {bugs.length === 0 && <p className="mb-3 px-2">No bugs info.</p>}
      {bugs.length !== 0 && (
        <ul className="mb-3 px-2">
          {bugs.map((bug) => (
            <li key={bug.id} className="border-b border-black mb-3 pb-2">
              <p>Title: {bug.title}</p>
              <p>Fixed: {!bug.fixed ? "No" : "Fixed"}</p>
              {!bug.fixed && (
                <button
                  className="border border-black rounded px-3 py-1 my-3"
                  onClick={() => handleFix(bug)}
                >
                  Fix Bug
                </button>
              )}
              {bug.fixed && (
                <button
                  className="border border-black rounded px-3 py-1 my-3"
                  onClick={() => handleDelete(bug)}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="mb-3 px-2">
        <LinkInfo url="https://immerjs.github.io/immer" content="Immer" />
      </div>
    </>
  );
}
