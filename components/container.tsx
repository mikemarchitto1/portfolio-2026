export default function Container({ children }) {
  return (
    <div
      className="
        w-full
        max-w-[1328px]
        mx-auto

        px-4        /* 16px at ~390px */
        sm:px-8     /* 32px at ~768px */
        lg:px-16    /* 64px at ~1328px */
      "
    >
      {children}
    </div>
  );
}
