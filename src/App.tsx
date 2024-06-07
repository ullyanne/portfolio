import { useEffect, useState } from 'react'
import { Experience } from './components/Experience'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'
import { getProjects } from './services/ProjectsServices'
import { JobsResponse, LinksResponse, ProjectsResponse } from './services/ServicesTypes'
import { getJobs } from './services/JobsServices'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { getLinks } from './services/LinksServices'

export default function App() {
  const [projects, setProjects] = useState<ProjectsResponse[]>([])
  const [jobs, setJobs] = useState<JobsResponse[]>([])
  const [links, setLinks] = useState<LinksResponse | null>(null)

  useEffect(() => {
    getProjects().then(setProjects);
    getJobs().then(setJobs);
    getLinks().then(setLinks);
  }, []);

  return (
    <>
      <Navbar resumeLink={links?.resume} />
      <Presentation />
      <Projects projects={projects} />
      <Experience jobs={jobs}/>
      <Contact />
      <Footer />
    </>
  )
}
