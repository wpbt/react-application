interface Props {
  title: string;
}

export default function HeadingThird({ title }: Props) {
  return (
    <h2 className="mb-3 text-base text-white font-semibold bg-slate-600 px-2 rounded-lg py-1">
      {title}
    </h2>
  );
}
