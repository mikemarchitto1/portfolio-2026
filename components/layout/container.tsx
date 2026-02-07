import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Applied to the inner max-width wrapper (for flex/grid on the content row). */
  innerClassName?: string;
  as?: "div" | "main" | "section" | "header" | "footer";
}

/**
 * Layout container: 64px outer spacing (desktop), 16px (mobile).
 * Inner content max-width 1200px.
 */
export function Container({
  children,
  className,
  innerClassName,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-4 md:px-16",
        "[padding-left:max(16px,env(safe-area-inset-left))] [padding-right:max(16px,env(safe-area-inset-right))]",
        "md:[padding-left:max(64px,env(safe-area-inset-left))] md:[padding-right:max(64px,env(safe-area-inset-right))]",
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1200px]", innerClassName)}>
        {children}
      </div>
    </Component>
  );
}
