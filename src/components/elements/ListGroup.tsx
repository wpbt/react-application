import HeadingTwo from "./HeadingTwo";
import { items } from "./../../services/data";

export default function ListGroup() {
  let data = items();

  const handleClick = (item: string, index: number) => {
    console.log(`Value: ${item}, Index: ${index}`);
  };

  return (
    <>
      <HeadingTwo title="List Group Demo: Array.map()" />
      <ul className="mb-3 list-disc text-sm px-5">
        {data.map((item, index) => (
          <li
            className="cursor-pointer"
            key={item}
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
