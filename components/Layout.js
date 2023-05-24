import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
