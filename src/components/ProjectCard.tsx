import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/projects_img/01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  technologies: string[]
}

export function ProjectCard({ id, title, description, technologies }: ProjectCardProps) {
  return (
    <button className="select-text rounded-md outline-none focus:ring-2 focus:ring-sky-300/80 focus-visible:ring-sky-300/80 text-left bg-[#162038] space-y-4 p-5 max-w-96 h-auto ">
      <div className='flex justify-between'>
        <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
        <a target="_blank" className="hover:text-slate-300 transition ease-in-out focus-visible:ring-sky-300/80 focus:ring-2 outline-none" href="">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/>
        </a>
      </div>
      <img className="rounded-md" src={img} alt="Café" />
      <p className="text-base h-28">{description}</p>
      <div>
        <ul className="text-sm flex gap-3 items-center flex-wrap">
          {technologies.map((tech, i) => {
            return <li key={i} className="text-xs inline rounded-full bg-sky-500/10 px-3 py-1 text-sky-300">{tech}</li>
          })}
        </ul>
      </div>
    </button>
  )
}