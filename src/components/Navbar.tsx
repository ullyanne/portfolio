import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-end bg-slate-900 py-5 border-b border-slate-800/70 ">
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
