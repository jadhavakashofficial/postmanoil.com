
// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}