import { ReactNode } from "react";

export default function Text({ children }: { children: ReactNode }) {
  return <p className="text-base mx-3">{children}</p>;
}
