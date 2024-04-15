import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-end bg-slate-900 py-4 border-b border-slate-800/70 ">
        <ul className="flex flex-row gap-4 me-40 mt-2 text-slate-400 ">
          <li className="hover:text-slate-300 transition ease-in-out">
            <FontAwesomeIcon icon={faLinkedin} font-size="1.51em" />
          </li>
          <li className="hover:text-slate-300 transition ease-in-out">
            <FontAwesomeIcon icon={faGithub} font-size="1.5em" />
          </li>
        </ul>
      </nav>
    </>
  );
}
