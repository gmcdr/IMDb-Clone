import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import "./globals.css";

export const metadata = {
  title: "IMDb Clobe",
  description: "This is the IMDb clobe website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      ></meta>
      <meta name="description" content={metadata.description}></meta>
      <body>
        <Providers>
          {/*Header*/}
          <Header/>

          {/*Navbar*/}
          <Navbar/>

          {children}
        </Providers>
      </body>
      <link rel="icon" href="/favicon.ico"></link>
    </html>
  );
}
