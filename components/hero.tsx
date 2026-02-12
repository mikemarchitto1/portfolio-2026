import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="bg-portfolio-white">
      <Container>
        <h1 className="mt-0 mb-32 w-full break-words text-left text-[32px] leading-[1.2] font-light tracking-[-0.005em] text-portfolio-black [font-family:var(--font-roboto)] md:text-[60px] md:leading-[76px]">
          I design insightful digital experiences for startups and global
          brands.
        </h1>
      </Container>
    </section>
  );
}
