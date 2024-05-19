import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import inpacienteThumbnail from '../assets/projects_img/inpaciente/thumbnail.png'

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  technologies: string[]
  site: string
}

export function ProjectCard({ id, title, description, technologies }: ProjectCardProps) {
  const projectsComponents: { [key: number]: string } = {
    1: '/projects/inpaciente'
  };

  const projectsImages: { [key: number]: string } = {
    1: inpacienteThumbnail
  };

  return (
    <div className="select-text rounded-md outline-none focus:ring-2 focus:ring-sky-300/80 focus-visible:ring-sky-300/80 text-left bg-[#162038] space-y-4 p-5 max-w-96 h-auto ">
      <div className='flex justify-between'>
        <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
        <Link to={projectsComponents[id]} target="_blank" className="hover:text-slate-300 transition ease-in-out focus-visible:ring-sky-300/80 focus:ring-2 outline-none" >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' />
        </Link>
      </div>
      <img className="rounded-md" src={projectsImages[id]} alt="" />
      <p className="text-base max-[320px]:h-36 h-36 md:h-32 lg:h-32 xl:h-32 text-justify">{description}</p>
      <div>
        <ul className="text-sm flex gap-3 items-center flex-wrap">
          {technologies.map((tech, i) => {
            return <li key={i} className="text-xs inline rounded-full bg-sky-500/10 px-3 py-1 text-sky-300">{tech}</li>
          })}
        </ul>
      </div>
    </div>
  )
}