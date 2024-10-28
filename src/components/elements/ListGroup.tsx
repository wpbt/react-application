import HeadingTwo from "./HeadingTwo";

interface Props {
  items: string[];
  heading: string;
  handleClick: (item: string, index: number) => void;
}

export default function ListGroup({ items, heading, handleClick }: Props) {
  return (
    <>
      <HeadingTwo title={heading} />
      <ul className="mb-3 list-disc text-sm px-5">
        {items.map((item, index) => (
          <li key={item} onClick={() => handleClick(item, index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
