import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-end bg-slate-900 py-5 border-b border-slate-800/70 ">
        <a hidden className="text-sky-400 rounded-full bg-gradient-to-tr from-sky-700/20 via-sky-600/20 to-sky-500/10 px-3 py-1.5 max-[375px]:ml-3 md:ml-20 ml-7 hover:bg-sky-950/40 hover:shadow-lg shadow-slate-500/70 transition ease-in-out" href="" target="_blank">
          Currículo
        </a>
        <ul className="flex flex-row gap-7 me-7 md:me-40 mt-2 text-slate-400 ">
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://www.linkedin.com/in/ullyanne-patriota/">
              <FontAwesomeIcon icon={faLinkedin} fontSize="1.81em" />
            </a>
          </li>
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://github.com/ullyanne/">
              <FontAwesomeIcon icon={faGithub} fontSize="1.8em" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
