// components/container.tsx
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="
        w-full
        max-w-[1328px]
        mx-auto
      "
    >
      {children}
    </div>
  );
}
