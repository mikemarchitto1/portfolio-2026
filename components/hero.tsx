import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="bg-portfolio-white">
      <Container>
        <h1 className="my-16 w-full break-words text-left text-[2rem] font-light leading-[1.2] tracking-[-0.005em] text-portfolio-black [font-family:var(--font-roboto)] md:text-[60px] md:leading-[76px]">
          I design insightful digital experiences for startups and global brands.
        </h1>
      </Container>
    </section>
  );
}
