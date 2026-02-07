import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
}

export default function Container({
  children,
  as: Tag = "div",
  className,
  innerClassName,
  fullBleed = false,
}: ContainerProps) {
  return (
    <Tag
      className={clsx(
        fullBleed ? "w-full" : "w-full px-4",
        className
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-[1200px]",
          innerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
