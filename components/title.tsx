export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[60px] leading-[76px] font-light tracking-[0.5%] text-black font-['Roboto']">
      {children}
    </h2>
  );
}
