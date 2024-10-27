import Alert from "./elements/Alert";
import BackendService from "./elements/BackendService";
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import ImmerExample from "./elements/ImmerExample";
import ListGroup from "./elements/ListGroup";
import MyForm from "./elements/MyForm";
import ReactQueryComp from "./reactQuery/ReactQueryComp";

export default function App() {
  let items = ["Item A", "Item B", "Item C", "Item D", "Item E"];

  const handleClick = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <>
      <Header />

      <ListGroup
        items={items}
        heading="List Group Demo: Array.map()"
        handleClick={handleClick}
      />

      <Alert title="Passing Children to Components">
        <h4>Some HTML (its a h2 tag)</h4>
        <p>Some nothing content (its a p tag)</p>
      </Alert>

      <ImmerExample title="Simplifying Working with Objects using Immer" />

      <MyForm />

      <BackendService />

      <ReactQueryComp />

      <Footer />
    </>
  );
}
