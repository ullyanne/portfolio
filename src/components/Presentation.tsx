import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/profile-picture.png'

export function Presentation() {
  return (
    <div className="h-[91vh] md:h-[72vh] lg:h-[80vh] xl:h-[78vh] min-[2560px]:h-[76vh]">
      <header className="md:mt-40 flex justify-center flex-wrap md:px-2 px-4">
        <div className="max-w-[370px] pt-24">
          <h2 className="text-sm font-mono text-sky-400">Olá, me chamo</h2>
          <h1 className="text-5xl font-medium -ml-0.5 text-slate-200 mt-1">Ullyanne Freire</h1>
          <p className="mt-4 text-lg">Desenvolvedora de software e graduanda em Engenharia de Computação na UFAL</p>
        </div>
        <img src={img} alt="Ullyanne Freire" className='object-scale-down w-72 m-6 md:m-4 ml-8' />
      </header>

      <div className="flex justify-center s23:mt-1 mt-12 md:mt-24 lg:mt-32 2xl:mt-60">
        <a href="#Projetos">
          <FontAwesomeIcon className="animate-bounce" icon={faChevronDown} size="xl" />
        </a>
      </div>
    </div>
  )
}