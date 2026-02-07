import Image from "next/image";
import Container from "@/components/layout/container";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-black py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Left — Headline */}
          <div className="flex flex-col justify-start">
            <h1 className="text-[40px] md:text-[56px] leading-[48px] md:leading-[64px] font-normal tracking-[-0.5px] text-black dark:text-white">
              I design insightful digital experiences for startups and global brands.
            </h1>
          </div>

          {/* Right — Hero Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/home_glorifi.png"
              alt="Hero image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
}