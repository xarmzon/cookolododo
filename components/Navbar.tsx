import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useRouter } from "next/router";
interface LiProps {
  name: string;
  url: string;
  isLast?: boolean;
  active?: boolean;
}

const Li = ({ name, url, active, isLast = false }: LiProps) => {
  return (
    <li className={`${!isLast && "pr-4"} hover:text-primary-100`}>
      <Link href={url}>
        <a className={active && "border-b border-ascent-3"}>{name}</a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState<string>();
  useEffect(() => {
    setActive(router.asPath.split("#")[1]);
    return () => {};
  }, [router]);

  useEffect(() => {}, []);
  return (
    <div className={`flex justify-between container p-5 xl:p-0 h-16`}>
      <Link href="/">
        <a>Olododo</a>
      </Link>
      <nav>
        {/* <HiOutlineViewGrid className="text-2xl" /> */}
        <ul className="flex justify-evenly">
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
