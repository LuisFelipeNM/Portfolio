import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiC, SiArduino, SiGnubash, SiOctave } from 'react-icons/si';

function App() {
  
  const projects = [
    {
      title: "Projeto 1",
      desc: "Descrição curta do projeto. Ex: Um dashboard feito com React e Sigma.js para visualização de dados.",
      techs: ["React", "Tailwind", "Node.js"],
      link: "#"
    },
    {
      title: "Projeto 2",
      desc: "Outro projeto incrível. Ex: API RESTful construída para um Hackathon.",
      techs: ["Python", "Flask", "SQL"],
      link: "#"
    },
    {
      title: "Projeto 3",
      desc: "Automação de sistemas usando scripts e controle de hardware.",
      techs: ["C++", "Arduino", "IoT"],
      link: "#"
    }
  ];

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C / C++", icon: <SiC /> }, // Ícone do C
    { name: "Arduino", icon: <SiArduino /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Bash", icon: <SiGnubash /> },
    // Adicionei Octave pois vi no seu histórico que você usa
    { name: "Octave", icon: <SiOctave /> }, 
  ];
  
  return (
    <div className="min-h-screen bg-[#0f0715] text-white font-sans selection:bg-purple-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#0f0715]/80 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Portfolio.
          </a>
          <ul className="hidden md:flex gap-8 font-medium text-gray-300">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projetos</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contato</a>
          </ul>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="scroll-mt-28 pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luís Felipe
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Engenheiro de Computação. Desenvolvedor Frontend.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <SocialBtn icon={<Github />} link="https://github.com/LuisFelipeNM" />
            <SocialBtn icon={<Linkedin />} link="https://www.linkedin.com/in/lu%C3%ADs-felipe-nadalini-marafon-299413302/" />
            <SocialBtn icon={<Mail />} link="mailto:lfnadalinimarafon@gmail.com" />
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://github.com/LuisFelipeNM.png" 
            alt="Perfil" 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-white/10 rotate-3 hover:rotate-0 transition duration-500 shadow-[0_0_40px_rgba(147,51,234,0.5)]"
          />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="scroll-mt-28 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Minhas <span className="text-purple-400">Habilidades</span></h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group relative flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="scroll-mt-28 py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos <span className="text-purple-400">Recentes</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a1025] rounded-xl p-6 border border-white/5 hover:-translate-y-2 transition duration-300 hover:border-purple-500/50">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map(tech => (
                  <span key={tech} className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400">
                Ver no GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="scroll-mt-28 py-10 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© 2025 Luís Felipe Nadalini Marafon. Feito com React & Tailwind.</p>
      </footer>

    </div>
  );
}

// Componentes Auxiliares
function SocialBtn({ icon, link }) {
  return (
    <a href={link} target="_blank" className="p-3 bg-white/5 rounded-lg hover:bg-purple-600 hover:text-white transition">
      {icon}
    </a>
  )
}

function SkillCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-[#0f0715] border border-white/10 rounded-xl hover:border-purple-500 transition text-center">
      <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  )
}

export default App;