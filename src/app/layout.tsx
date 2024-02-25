import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/component/SideBar";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin",
  description: "와글와글 관리자 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StoreProvider>
          <div className="gloval-wrap">
            <div className="gloval-twotone">
              <div className="__top"></div>
              <div className="__bottom"></div>
            </div>
            <div className="gloval-page">
              <SideBar />
              <div className="gloval-content-wrap">
                <div className="gloval-content-top">
                  <h2 className="_page_name">대시보드</h2>
                  <div className="contact__">
                    <p className="cont">
                      <span className="icon">
                        <FaPhone />
                      </span>
                      <span>010-2835-2732</span>
                    </p>
                    <p className="cont">
                      <span className="icon">
                        <SiGmail />
                      </span>
                      <span>tlsgywls1107@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div className="gloval-content">{children}</div>
              </div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
