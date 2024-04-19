import { useEffect, useState } from 'react'
import { Experience } from './components/Experience'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'
import { getProjects } from './services/ProjectsServices'
import { JobsResponse, ProjectsResponse } from './services/ServicesTypes'
import { getJobs } from './services/JobsServices'

export default function App() {
  const [projects, setProjects] = useState<ProjectsResponse[]>([])
  const [jobs, setJobs] = useState<JobsResponse[]>([])

  useEffect(() => {
    getProjects().then(setProjects);
    getJobs().then(setJobs);
  }, []);

  return (
    <>
      <Navbar />
      <Presentation />
      <Projects projects={projects} />
      <Experience jobs={jobs}/>
    </>
  )
}
