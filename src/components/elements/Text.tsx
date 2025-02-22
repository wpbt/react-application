import { ReactNode } from "react";

export default function Text({ children }: { children: ReactNode }) {
  return <div className="text-base mx-3">{children}</div>;
}
