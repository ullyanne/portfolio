import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";

interface ExperienceProps {
  jobs: ExperienceCardProps[]
}

export function Experience( {jobs} : ExperienceProps ){
  return (
    <div className="flex justify-around h-auto ">
      <div className="w-[1176px] space-y-1 mr-4 mt-10">
        <h2 className='text-2xl font-medium text-slate-200 pb-4'>Experiência</h2>
        <div className="flex flex-col gap-5">
          {jobs.map((job) => {
            return <ExperienceCard key={job.id} {...job} is_last={jobs.length === job.id}/>
          })}
        </div>
      </div>
    </div>
  )
}