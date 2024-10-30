import {
  StateHooks,
  Alert,
  BackendService,
  Footer,
  Header,
  ImmerExample,
  ListGroup,
  MyForm,
  ReactQueryComp,
} from "./Index";

export default function App() {
  return (
    <>
      <Header />

      <StateHooks />

      <ListGroup />

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
