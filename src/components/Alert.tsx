import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Alert({ title, children }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}
