import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Links | ezrachai.",

  description:
    "Hi! I'm Ezra Chai. Here are the websites that I've built, which you can visit now, along with my personal social media account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2XMWXFJMQ1"
      ></script>
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2XMWXFJMQ1');
          `}
      </script>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
