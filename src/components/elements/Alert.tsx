import { ReactNode } from "react";
import HeadingTwo from "./HeadingTwo";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Alert({ title, children }: Props) {
  return (
    <>
      <HeadingTwo title={title} />
      <div className="mb-3 px-2">{children}</div>
    </>
  );
}
