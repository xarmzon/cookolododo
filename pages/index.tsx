import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Functions from "../components/Functions";
import Activities from "../components/Activities";

export default function Home() {
  return (
    <div className="h-screen">
      <header className="h-screen md:h-[95%] bg-cook1 bg-primary-dark bg-blend-multiply bg-cover bg-center text-gray-100">
        <Navbar />
        <Main />
      </header>
      <About />
      <Functions />
      <Activities />
      <Footer />
    </div>
  );
}
