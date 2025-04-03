import type { Metadata } from "next";
import { ThemeProvider } from "~/context/ThemeContext";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Next.js Pet Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
