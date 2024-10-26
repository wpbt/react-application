import Alert from "./Alert";
import ImmerExample from "./ImmerExample";
import ListGroup from "./ListGroup";

export default function App() {
  let items = ["A", "B", "C", "D", "E"];

  const handleClick = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <>
      <h1 className="font-black text-[32px] mb-3">
        React Application Sections
      </h1>
      <ListGroup
        items={items}
        heading="List Group Demo"
        handleClick={handleClick}
      />
      <Alert title="Passing Children to Components">
        <h4>Some HTML</h4>
        <p>Some nothing content</p>
      </Alert>

      <ImmerExample title="Simplifying Working with Objects using Immer" />
    </>
  );
}
