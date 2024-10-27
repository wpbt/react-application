interface Props {
  items: string[];
  heading: string;
  handleClick: (item: string, index: number) => void;
}

export default function ListGroup({ items, heading, handleClick }: Props) {
  return (
    <>
      <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
        {heading}
      </h2>
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
