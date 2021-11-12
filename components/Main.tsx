import { Zoom, Fade } from "react-reveal";
import { BsArrowDownCircle } from "react-icons/bs";
import { useRouter } from "next/router";
const Main = () => {
  const router = useRouter();
  return (
    <section className="p-5 md:p-0 md:w-[70%] md:mx-auto space-y-7 md:space-y-10 container">
      <Fade top>
        <h1 className="text-center p-2 md:mt-4 text-2xl sm:text-3xl md:text:5xl uppercase font-black">
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
          <span className="text-ascent-3">Ilorin East and South</span> in the
          National Assembly and chairman, House committee on National Planning
          and Economic Development, the embroidment of effective and classic
          representation with super amazing and outstanding performance.
        </p>
      </Zoom>
      <Zoom bottom>
        <p className="py-5 mt-5 sm:mt-7 md:mt-9 w-full text-center flex justify-center items-center">
          <BsArrowDownCircle
            className="text-4xl text-center text-ascent-3 animate-bounce cursor-pointer"
            onClick={() => router.push("/#about")}
          />
        </p>
      </Zoom>
    </section>
  );
};

export default Main;
