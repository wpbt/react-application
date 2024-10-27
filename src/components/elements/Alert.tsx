import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Alert({ title, children }: Props) {
  return (
    <>
      <h2 className="font-black text-lg my-8 bg-black text-white px-2 rounded-lg py-1">
        {title}
      </h2>
      <div className="mb-3 px-2">{children}</div>
    </>
  );
}
