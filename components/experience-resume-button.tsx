export default function ExperienceResumeButton() {
  return (
    <a
      href="/resume.pdf"
      className="
        inline-flex items-center justify-center
        h-[48px] px-6
        rounded-[6px]
        bg-[#264D99] text-white
        font-['Roboto'] text-[16px] leading-[24px] font-semibold tracking-[0.5%]
        hover:opacity-90
        w-full md:w-auto
      "
    >
      Download my resume
    </a>
  );
}
