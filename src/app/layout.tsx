import type { Metadata } from "next";

// Reset css
import "./globals.css";

// Font
import { Inter } from "next/font/google";

// Helpers
import { ThemeProvider } from "../theme/helpers/theme-provider";

// Theme
import { theme } from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MatheusGomesDev",
  description:
    "Programador Frontend apaixonado por criação de interfaces inovadoras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
