import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/profile-picture.png'

export function Presentation() {
  return (
    <div className="h-[95vh] md:h-[45vh] lg:h-[71vh] xl:h-[71vh] min-[2679px]:h-[45vh]">
      <header className="md:mt-40 flex justify-center flex-wrap md:px-2 px-4">
        <div className="max-w-[370px] pt-16">
          <h2 className="text-sm font-mono text-sky-400">Olá, me chamo</h2>
          <h1 className="text-5xl font-medium -ml-0.5 text-slate-200">Ullyanne Freire</h1>
          <p className="mt-4 text-sm">Desenvolvedora de software e graduanda em Engenharia de Computação na UFAL</p>
        </div>
        <img src={img} alt="Ullyanne Freire" className='object-scale-down w-60 m-4' />
      </header>

      <div className="flex justify-center mt-24 md:mt-6 lg:mt-40">
        <a href="#Projetos">
          <FontAwesomeIcon className="animate-bounce" icon={faChevronDown} size="lg" />
        </a>
      </div>
    </div>
  )
}