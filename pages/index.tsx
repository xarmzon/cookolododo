import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsArrowDownCircle } from "react-icons/bs";
import Main from "../components/Main";
import About from "../components/About";
export default function Home() {
  return (
    <div className="h-screen">
      <header className="h-screen md:h-[95%] bg-cook1 bg-primary-dark bg-blend-multiply bg-cover bg-center text-gray-100">
        <Navbar />
        <Main />
      </header>

      <About />
      <Footer />
    </div>
  );
}
