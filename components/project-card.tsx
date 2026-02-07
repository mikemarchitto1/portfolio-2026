import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Large: full-width image, title left / description right. Small: half-width, stacked. */
  variant: "large" | "small";
  href?: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  variant,
  href,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={variant === "large" ? 1328 : 636}
          height={variant === "large" ? 480 : 480}
          className="h-auto w-full object-cover"
          sizes={
            variant === "large"
              ? "(min-width: 768px) 1328px, 100vw"
              : "(min-width: 768px) 636px, 100vw"
          }
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 pt-4",
          variant === "large" &&
            "md:flex-row md:items-start md:justify-between md:gap-12 md:pt-6"
        )}
      >
        <h2 className="text-left text-portfolio-black [font-family:var(--font-roboto)] text-[24px] font-normal leading-[32px] tracking-[0.0025em] md:text-[34px] md:leading-[48px]">
          {title}
        </h2>
        <p
          className={cn(
            "text-left text-[16px] font-normal leading-[24px] text-portfolio-black/80 [font-family:var(--font-roboto)]",
            variant === "large" && "md:max-w-[60%]"
          )}
        >
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <article className="group">
        <a
          href={href}
          className="block text-portfolio-black no-underline focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
        >
          {content}
        </a>
      </article>
    );
  }

  return <article>{content}</article>;
}
