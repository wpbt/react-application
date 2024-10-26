import Alert from "./Alert";
import ListGroup from "./ListGroup";

export default function App() {
  let items = ["A", "B", "C", "D", "E"];

  const handleClick = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <>
      <h1>React Application Sections</h1>
      <ListGroup
        items={items}
        heading="List Group Demo"
        handleClick={handleClick}
      />
      <Alert title="Passing Children to Components">
        <h4>Some HTML</h4>
        <p>Some nothing content</p>
      </Alert>
    </>
  );
}
