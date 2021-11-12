import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsArrowDownCircle } from "react-icons/bs";
import { Zoom, Fade } from "react-reveal";
export default function Home() {
  return (
    <div className="h-screen">
      <header className="h-screen md:h-[95%] bg-cook1 bg-primary-dark bg-blend-multiply bg-cover bg-center text-gray-100">
        <Navbar />
        <section className="p-5 md:p-0 md:w-[70%] md:mx-auto space-y-10 container">
          <Fade top>
            <h1 className="text-center p-2 mt-9 text-2xl sm:text-3xl md:text:5xl uppercase font-black">
              <span className="text-ascent-3">
                Hon. Abdulganiyu Saka Cook Olododo
              </span>{" "}
              <br />
              for me and you in Ilorin East and South Federal Constituency
            </h1>
          </Fade>
          <Zoom>
            <p className="mt-6 text-center">
              A member representing{" "}
              <span className="text-ascent-3">Ilorin East and South</span> in
              the National Assembly and chairman, House committee on National
              Planning and Economic Development, the embroidment of effective
              and classic representation with super amazing and outstanding
              performance.
            </p>
          </Zoom>
        </section>
      </header>

      <Footer />
    </div>
  );
}
