import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'

export default function App() {
  let projects = [
    {
      id: 1,
      title: "Gerenciamento de Medicação",
      description: "Com uma abordagem centrada no usuário, o aplicativo oferece uma solução intuitiva. Com uma abordagem centrada no usuário, o aplicativo oferece uma solução intuitiva.",
      technologies: ["React Native", "Typescript", "Tailwind"]
    },
    {
      id: 2,
      title: "Cadastro de itens",
      description: "Permite configurar alarmes personalizados, acompanhar medicações diárias e estabelecer lembretes úteis para manter a consistência no tratamento.",
      technologies: ["Spring boot", "Java"]
    },
    {
      id: 3,
      title: "API",
      description: "Travesseiro.",
      technologies: ["Flutter", "Java", "PHP", "React"]
    },
    {
      id: 4,
      title: "API",
      description: "Permite configurar alarmes personalizados, acompanhar medicações diárias e estabelecer lembretes úteis para manter a consistência no tratamento.",
      technologies: ["Spring boot", "Java"]
    },
  ]
  
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects projects={projects} />
    </>
  )
}
