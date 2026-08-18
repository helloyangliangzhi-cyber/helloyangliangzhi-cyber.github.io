import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "杨两只｜品牌策略与文案",
  description: "帮助消费与生活方式品牌找到更清晰的定位，并把它写成人们愿意记住的话。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
