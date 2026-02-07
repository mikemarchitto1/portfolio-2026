import "./globals.css";

export const metadata = {
  title: "Michael Marchitto — Portfolio",
  description: "UX Designer & Tactical Business Operator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
