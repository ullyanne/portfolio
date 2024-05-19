export type JobsResponse = {
  id: number
  job_title: string
  company: string
  company_url?: string | null
  job_description: string
  job_duration: string
}

export type ProjectsResponse = {
  id: number
  title: string
  description: string
  technologies: string[]
  site: string
}