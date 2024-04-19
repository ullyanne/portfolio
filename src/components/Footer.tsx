import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer(){
  return (
    <footer className="text-sm flex justify-center text-slate-500 mt-20 mb-5 max-w-screen">
      <div className="flex flex-col">
        <ul className="flex flex-row justify-center gap-10 mb-3 text-slate-400 ">
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="mailto:ujfp@ic.ufal.br">
              <FontAwesomeIcon icon={faEnvelope} font-size="1.97em" />
            </a>
          </li>
          
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://www.linkedin.com/in/ullyanne-patriota/">
              <FontAwesomeIcon icon={faLinkedin} font-size="1.97em" />
            </a>
          </li>
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://github.com/ullyanne/">
              <FontAwesomeIcon icon={faGithub} font-size="1.96em" />
            </a>
          </li>
        </ul>
        <span>Copyright © 2024 Ullyanne Freire</span>
      </div>

    </footer>
  )
}