import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Alert({ title, children }: Props) {
  return (
    <>
      <h2 className="font-black text-lg mb-3">{title}</h2>
      <div className="mb-3">{children}</div>
    </>
  );
}
