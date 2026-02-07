import Image from "next/image";

export default function Grid() {
  return (
    <section
      id="work"
      className="w-full bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Example Project Card 1 */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/project_placeholder.png"
            alt="Project preview"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
          />
          <h3 className="text-[20px] leading-[28px] font-semibold">
            Project Title
          </h3>
          <p className="text-[16px] leading-[24px] text-black/70 dark:text-white/70">
            Short description of the project goes here.
          </p>
        </div>

        {/* Example Project Card 2 */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/project_placeholder.png"
            alt="Project preview"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
          />
          <h3 className="text-[20px] leading-[28px] font-semibold">
            Project Title
          </h3>
          <p className="text-[16px] leading-[24px] text-black/70 dark:text-white/70">
            Short description of the project goes here.
          </p>
        </div>

        {/* Example Project Card 3 */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/project_placeholder.png"
            alt="Project preview"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
          />
          <h3 className="text-[20px] leading-[28px] font-semibold">
            Project Title
          </h3>
          <p className="text-[16px] leading-[24px] text-black/70 dark:text-white/70">
            Short description of the project goes here.
          </p>
        </div>

      </div>
    </section>
  );
}
