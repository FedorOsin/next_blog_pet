import type { Metadata } from "next";
import { ThemeProvider } from "~/context/ThemeContext";
import { AuthProvider } from "~/context/AuthProvider";
import "~/styles/globals.css";
import { Header } from "~/components/Header";

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
        <AuthProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
