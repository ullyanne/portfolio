import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/profile-picture.png'

export function Presentation() {
  return (
    <div className="h-[95vh] md:h-[45vh] lg:h-[71vh] xl:h-[75vh] min-[2679px]:h-[45vh]">
      <header className="md:mt-40 flex justify-center flex-wrap md:px-2 px-4">
        <div className="max-w-[370px] pt-24">
          <h2 className="text-sm font-mono text-sky-400">Olá, me chamo</h2>
          <h1 className="text-5xl font-medium -ml-0.5 text-slate-200 mt-1">Ullyanne Freire</h1>
          <p className="mt-4 text-lg">Desenvolvedora de software e graduanda em Engenharia de Computação na UFAL</p>
        </div>
        <img src={img} alt="Ullyanne Freire" className='object-scale-down w-72 m-4 ml-8' />
      </header>

      <div className="flex justify-center mt-24 md:mt-6 lg:mt-60">
        <a href="#Projetos">
          <FontAwesomeIcon className="animate-bounce" icon={faChevronDown} size="xl" />
        </a>
      </div>
    </div>
  )
}