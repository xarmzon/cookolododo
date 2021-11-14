import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { HiOutlineViewGrid, HiX } from "react-icons/hi";
import { Zoom, Fade } from "react-reveal";
import { useRouter } from "next/router";
import useClickOutside from "../hooks/useClickOutside";
interface LiProps {
  name: string;
  url: string;
  isLast?: boolean;
  active?: boolean;
  className?: string;
}

const Li = ({ name, url, active, className = "", isLast = false }: LiProps) => {
  const router = useRouter();
  return (
    <li
      className={`pl-5 md:pl-auto pr-3 md:pr-auto ${
        !isLast && "pr-4"
      } my-1 md:my-auto hover:text-primary-100 hover:border-b hover:border-ascent-3 cursor-pointer py-3 md:py-0 ${className} ${
        active &&
        "bg-primary-dark md:bg-transparent border-l-4 md:border-l-0 border-ascent-3"
      } transition-all duration-700`}
    >
      <Link href={url}>
        <a className={`h-full md:h-auto w-full md:w-auto`}>{name}</a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  const router = useRouter();
  const [active, setActive] = useState<string>();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useClickOutside(navRef, (e) => setNavOpen(false));

  useEffect(() => {
    setActive(router.asPath.split("#")[1]);
    navOpen && setNavOpen((prev) => false);
    return () => {};
  }, [router]);

  useEffect(() => {}, []);

  return (
    <div
      className={`flex justify-between items-center container p-5 xl:p-0 h-16`}
    >
      <Link href="/">
        <a>Olododo</a>
      </Link>
      <div
        className={`text-2xl md:hidden cursor-pointer z-[999999] ${
          navOpen && "fixed top-4 right-4"
        } hover:text-ascent-3 transition-all duration-500`}
      >
        {navOpen ? (
          <Fade left>
            <HiX
              className="transform hover:rotate-[255deg]"
              onClick={() => setNavOpen((prev) => !prev)}
            />
          </Fade>
        ) : (
          <Zoom>
            <HiOutlineViewGrid
              className=""
              onClick={() => setNavOpen((prev) => !prev)}
            />
          </Zoom>
        )}
      </div>

      <nav
        ref={navRef}
        className={`w-[50vw] md:w-auto h-screen md:h-auto fixed bg-primary-700 bg-opacity-90 top-0 md:top-auto z-[999] shadow-sm ${
          navOpen ? "right-0" : "right-[-50vw]"
        } md:relative md:right-auto md:z-[1] md:shadow-none md:bg-transparent transition-all duration-700`}
      >
        <ul className={`flex flex-col mt-10 md:mt-0 md:flex-row md:space-x-3`}>
          <Li name="About" url="#about" active={active === "about"} />
          <Li
            name="Functions"
            url="#functions"
            active={active === "functions"}
          />
          <Li
            name="Activities"
            url="#activities"
            active={active === "activities"}
            isLast
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
