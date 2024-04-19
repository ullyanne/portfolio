import { ProjectCard } from "./ProjectCard";
import { ProjectCardProps } from "./ProjectCard";

interface ProjectsProps {
  projects: ProjectCardProps[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className='flex justify-around flex-wrap'>
      <div>
        <h2 id="Projetos" className='text-2xl font-medium text-slate-200 pl-4 pb-4'>Projetos</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row px-3'>
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />
          })}
        </div>
      </div>
    </div>
  )
}