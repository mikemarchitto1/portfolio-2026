import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  /** Desktop: 12 columns, 48px gutter. Mobile: 4 columns, 16px gutter. */
  cols?: 12 | 4;
}

export function Grid({ children, className, cols = 12 }: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-12",
        cols === 4 && "grid-cols-4",
        cols === 12 && "md:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

/** Use className for span, e.g. "col-span-4 md:col-span-6" or "col-span-4 md:col-span-12". */
export function GridItem({ children, className }: GridItemProps) {
  return <div className={cn(className)}>{children}</div>;
}
