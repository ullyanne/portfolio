import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";

interface ExperienceProps {
  jobs: ExperienceCardProps[]
}

export function Experience( {jobs} : ExperienceProps ){
  return (
    <div className="flex justify-around h-auto ">
      <div className="w-[1180px] space-y-1 ml-5 mr-4 mt-14 ">
        <h2 className='text-2xl font-medium text-slate-200 pb-4 max-sm:ml-6 max-lg:mx-5 max-xl:mx-5'>Experiência</h2>
        <div className="flex flex-col gap-5 max-sm:ml-6 max-lg:mx-5 max-xl:mx-5">
          {jobs.map((job) => {
            return <ExperienceCard key={job.id} {...job} is_last={jobs.length === job.id}/>
          })}
        </div>
      </div>
    </div>
  )
}