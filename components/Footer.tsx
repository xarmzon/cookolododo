import { APP_NAME } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="p-5 text-center text-sm md:text-lg w-full h-16 border-t-4 border-primary bg-primary-50 text-primary-dark">
      &copy; {new Date().getFullYear()} - <span className="">{APP_NAME}</span>.
      All right reserved.&nbsp; Designed and Developed by&nbsp;
      <a
        className="text-ascent hover:text-ascent-4"
        href="http://www.github.com/xarmzon"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Rastaarc
      </a>
    </footer>
  );
};

export default Footer;
