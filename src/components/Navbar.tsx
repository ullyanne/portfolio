import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between bg-slate-900 py-5 border-b border-slate-800/70 ">
        <a className="text-sky-400 rounded-full bg-gradient-to-tr from-sky-700/20 via-sky-600/20 to-sky-500/10  px-3 py-1.5 ml-20 hover:text-sky-400 hover:shadow-lg shadow-slate-500/70 transition ease-in-out" href="" target="_blank">
          Currículo
        </a>
        <ul className="flex flex-row gap-4 me-40 mt-2 text-slate-400 ">
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://www.linkedin.com/in/ullyanne-patriota/">
              <FontAwesomeIcon icon={faLinkedin} font-size="1.81em" />
            </a>
          </li>
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://github.com/ullyanne/">
              <FontAwesomeIcon icon={faGithub} font-size="1.8em" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
