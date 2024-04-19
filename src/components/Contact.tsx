import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contact(){
  return(
    <div className="flex justify-center mt-14 px-6">
      <div className="flex flex-col">
        <h1 className="text-2xl text-slate-300 font-semibold justify-center flex">
          Contate-me
        </h1>
        <p className="text-lg py-2"> Estou disponível para novas oportunidades 🙂</p>
        <ul className="flex flex-row justify-center gap-10 mt-3 text-slate-400 ">
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="mailto:ujfp@ic.ufal.br">
              <FontAwesomeIcon icon={faEnvelope} fontSize="2.1em" />
            </a>
          </li>
          
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://www.linkedin.com/in/ullyanne-patriota/">
              <FontAwesomeIcon icon={faLinkedin} fontSize="2.1em" />
            </a>
          </li>
          <li className="hover:text-slate-300 transition ease-in-out">
            <a target="_blank" href="https://github.com/ullyanne/">
              <FontAwesomeIcon icon={faGithub} fontSize="2em" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}