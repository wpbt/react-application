interface Props {
  items: string[];
  heading: string;
  handleClick: (item: string, index: number) => void;
}

export default function ListGroup({ items, heading, handleClick }: Props) {
  return (
    <>
      <h2>{heading}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item} onClick={() => handleClick(item, index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
