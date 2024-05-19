import img from '../assets/projects_img/inpaciente/homepage.png'
import homepage from '../assets/projects_img/inpaciente/patients/patient-homepage.png'
import patientDetail from '../assets/projects_img/inpaciente/patients/patient-detail.png'
import patientEdit from '../assets/projects_img/inpaciente/patients/patient-edit.png'
import patientCreate from '../assets/projects_img/inpaciente/patients/patient-create.png'
import patientDelete from '../assets/projects_img/inpaciente/patients/patient-delete.png'
import appointmentsHomepage from '../assets/projects_img/inpaciente/appointments/appointments-homepage.png'
import appointmentsCreate from '../assets/projects_img/inpaciente/appointments/appointments-create.jpeg'
import appointmentsEdit from '../assets/projects_img/inpaciente/appointments/appointments-edit.jpeg'
import doctorsHomepage from '../assets/projects_img/inpaciente/doctors/doctors-homepage.png'
import doctorsCreate from '../assets/projects_img/inpaciente/doctors/doctors-create.png'
import doctorsEdit from '../assets/projects_img/inpaciente/doctors/doctors-edit.png'
import swagger from '../assets/projects_img/inpaciente/swagger/swagger.png'
import { Footer } from './Footer'
import { Fragment } from 'react'
import { Link } from 'lucide-react';

export function InPaciente() {
  const tech = ["Typescript", "ReactJS", "NodeJS", "Fastify", "Prisma ORM", "Postgres", "Docker", "Tailwind"]

  return (
    <div>
      <div className="max-w-[950px] ml-auto mr-auto mt-10 flex justify-center bg-slate-800/20 border border-solid border-box rounded-md border-slate-800/30 flex-col pb-12 mb-5 shadow-md">

        <div>
          <img className='rounded-t-md object-none object-left-top' src={img} alt="" />
          <div className='pt-8 pl-10 pr-10'>
            <div className="flex pb-3 text-slate-200 " >
              <span className='text-5xl font-bold justify-left'>
                <a target='_blank' href="https://inpaciente.vercel.app/">
                  InPaciente: Gerenciador de clínicas médicas
                  <Link className='inline-block ml-2 text-slate-400 hover:text-slate-300 transition ease-out' strokeWidth={2.75} size={28} />
                </a>
              </span>
            </div>
            <span className=''>Projeto FullStack</span>
            {tech.map((t, index) => (
              <Fragment key={index}>
                <span className='text-sky-300 font-semibold'> · </span>
                <span>{t}</span>
              </Fragment>
            ))}
          </div>

        </div>

        <div className="pl-10 pr-10 pt-10 whitespace-pre-line text-justify">
          {`A motivação deste projeto é facilitar o processo de agendamento de consultas, documentação do histórico e dados pessoais dos pacientes e médicos em clínicas e consultórios de modo a reduzir o tempo de espera em filas, agilizar o atendimento e evitar perda de dados, em oposição à documentação realizada através de papel.

  `}

          {`Para isso, o `}
          <a className='border-b border-b-sky-300 text-sky-300 hover:text-sky-400 transition ease-linear' href="https://inpaciente.vercel.app/">InPaciente</a>

          {` conta com três módulos principais: Pacientes, Consultas e Médicos.

  `}

          <h2 className='text-2xl text-slate-200 font-semibold pb-3 pt-6'>Pacientes</h2>

          {`Sua página principal possui uma tabela que contém os dados de cada indivíduo: nome, endereço, CPF e número de telefone, como também uma barra de busca para filtrar os resultados. Além disso, algumas colunas da tabela possuem a opção de ordenação alfabética. Todos os dados apresentados são fictícios.

  `}

          <div className='flex justify-center'>
            <img className='rounded-md mb-5' src={homepage} alt="" />
          </div>


          {`Em cada linha da tabela, é possível acessar o dropdown à direita para visualizar detalhes do registro do paciente. Nessa página de detalhes, além dos dados pessoais, podem ser vistas suas próximas consultas de acordo com a data atual, junto com seus respectivos horário, data, médico e especialidade.

  `}

          <div className='flex justify-center'>
            <img className='w-[800px] h-auto mb-5 rounded-md' src={patientDetail} alt="" />
          </div>


          {`Além disso, é possível acessar a opção de atualizar os dados cadastrais mutáveis do paciente: número de telefone e endereço, que pode ser visualizada na figura abaixo.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={patientEdit} alt="" />
          </div>

          {`Também é possível acessar a opção de exclusão do registro do paciente da base de dados.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={patientDelete} alt="" />
          </div>

          {`Na parte superior da página principal, pode-se acessar a página de criação de novos registros de paciente através do botão "Novo Paciente". São aceitos apenas CPFs válidos e não é possível criar mais de um registro com o mesmo CPF.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={patientCreate} alt="" />
          </div>

          <h2 className='text-2xl text-slate-200 font-semibold pb-3 pt-6'>Consultas</h2>

          {`Na página inicial, é possível visualizar uma barra de busca e uma tabela contendo informações pertinentes às consultas: nome do médico, especialidade, nome do paciente e data. Como na página de pacientes, há também um dropdown presente ao lado de cada registro para realizar ações de atualização e exclusão.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={appointmentsHomepage} alt="" />
          </div>

          {`O preview da página de edição pode ser visualizado na figura abaixo.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={appointmentsEdit} alt="" />
          </div>

          {`Além disso, é possível acessar a página de agendamento de novas consultas. Nela, é solicitado o nome do médico, apresentando uma lista com todos os médicos cadastrados, o CPF do paciente e a data e horário da consulta. Ela pode ser visualizada na figura abaixo.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={appointmentsCreate} alt="" />
          </div>

          <h2 className='text-2xl text-slate-200 font-semibold pb-3 pt-6'>Médicos</h2>

          {`Semelhantemente às demais páginas, a página principal contém uma tabela que contém informações importantes sobre cada médico cadastrado: nome, especialidade e CRM.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={doctorsHomepage} alt="" />
          </div>

          {`A página de criação de novos médicos pode ser visualizada abaixo.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={doctorsCreate} alt="" />
          </div>

          {`E por fim, a de edição.

  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={doctorsEdit} alt="" />
          </div>

          <h2 className='text-2xl text-slate-200 font-semibold pb-3 pt-6'>Tecnologias utilizadas</h2>
          {`No backend, utilizei o framework Fastify para Node.js com Typescript, Prisma ORM e PostgreSQL aliado ao Docker para o banco de dados. Para a validação, usei a biblioteca Zod. Já para a documentação da API, foi utilizada a ferramenta Swagger. O `}

          <a className='border-b border-b-sky-300 text-sky-300 hover:text-sky-400 transition ease-linear' href="https://github.com/ullyanne/InPacienteAPI">repositório da API</a>

          {` está disponível no GitHub.


  `}

          <div className='flex justify-center'>
            <img className='mb-5 rounded-md' src={swagger} alt="" />
          </div>

          {`No frontend, utilizei React com Typescript, Tailwind para estilização, aleḿ de alguns componentes da biblioteca Radix. Para criação das tabelas, utilizei a biblioteca TanStack. Já para a criação dos formulários, React Hook Form e Zod. O `}

          <a className='border-b border-b-sky-300 text-sky-300 hover:text-sky-400 transition ease-linear' href="https://github.com/ullyanne/InPacienteweb">repositório do front</a>

          {` também está disponível no GitHub.`}
        </div>
      </div>

      <Footer />
    </div>

  )
}