import HeadingTwo from "../elements/HeadingTwo";
import LinkInfo from "../elements/LinkInfo";
import Text from "../elements/Text";

export default function StateHooks() {
  return (
    <>
      <HeadingTwo title="Built-in State Hooks" />
      <Text>
        useState() hooks is most suitable choice to handle data in a component.
        It accepts:
        <ul className="list-disc mx-5">
          <li>scalar values: number, string, boolean</li>
          <li>vector values: objects, arrays</li>
          <li>function call, function reference</li>
        </ul>
      </Text>
      <LinkInfo
        url="https://react.dev/reference/react/useState"
        content="useState()"
      />
    </>
  );
}
