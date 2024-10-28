interface Props {
  title: string;
}

export default function HeadingTwo({ title }: Props) {
  return (
    <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
      {title}
    </h2>
  );
}
