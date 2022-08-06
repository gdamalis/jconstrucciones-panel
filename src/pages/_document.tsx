import { Html, Head, Main, NextScript } from "next/document";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

export default function Document() {
  return (
    <Html className="h-full bg-gray-100">
      <Head></Head>
      <body className="min-h-full">
        <SideMenu />
        <div className="lg:pl-64 flex flex-col flex-1">
          <TopMenu />
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
