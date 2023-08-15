import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navbar2 from "./Navbar2";

// export default function Layout({ children, title }) {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elan Africa",
  description: "A business growth consultancy Agency",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <style>{inter.styles}</style>
      </Head>
      <Navbar />
      {/* <Navbar2 /> */}
      <main>{children}</main>
      <Footer />
    </html>
  );
};

export default Layout;
