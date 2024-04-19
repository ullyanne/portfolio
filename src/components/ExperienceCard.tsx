export interface ExperienceCardProps {
  id: number
  job_title: string
  company: string
  company_url?: string | null
  job_description: string
  job_duration: string
  is_last?: boolean | null
}

export function ExperienceCard( {id, job_title, company, company_url, job_description, job_duration, is_last} : ExperienceCardProps){
  return (
    <div className={"pb-5 max-w-3xl  " + (is_last? "" : "border-b border-slate-800/70") }>
      <h3 className="text-xl font-semibold text-slate-200">{job_title}</h3>
      
      <a href={company_url? company_url : undefined} target="_blank" className="text-sky-400 inline-block hover:text-sky-500 transition ease-in-out">{company}</a>
      <span className="px-3 text-slate-500 font-bold">·</span>
      <span className="text-sm mb-2 text-slate-500">{job_duration}</span>

      <p className="whitespace-pre-line">
        {job_description}
      </p>
    </div>
  )
}