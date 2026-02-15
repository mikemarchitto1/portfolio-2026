import Image from "next/image";

export default function ExperienceHeroRight() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/profile_king.png"
        alt="Michael wearing a crown"
        width={800}
        height={800}
        className="w-full max-w-[600px] h-auto"
      />

      <p className="mt-[24px] text-center text-black max-w-[600px]">
        <span className="italic block">
          “A king is a man who turns hope into action.”
        </span>
        <span className="not-italic block mt-[13px]">
          — Ralph Waldo Emerson
        </span>
      </p>
    </div>
  );
}
