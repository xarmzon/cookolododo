import Link from "next/link";
import { HiOutlineViewGrid } from "react-icons/hi";
interface LiProps {
  name: string;
  url: string;
  isLast?: boolean;
}

const Li = ({ name, url, isLast = false }: LiProps) => {
  return (
    <li className={`${!isLast && "pr-4"} hover:text-primary-100`}>
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between container p-5 xl:p-0 h-16">
      <Link href="/">
        <a>Olododo</a>
      </Link>
      <nav>
        {/* <HiOutlineViewGrid className="text-2xl" /> */}
        <ul className="flex justify-evenly">
          <Li name="About" url="#about" />
          <Li name="Projects" url="#projects" isLast />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
