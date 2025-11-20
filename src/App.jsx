import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';

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
      <section id="home" className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Luís Felipe
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Engenheiro de Computação. Transformo problemas complexos em soluções digitais elegantes.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <SocialBtn icon={<Github />} link="https://github.com/LuisFelipeNM" />
            <SocialBtn icon={<Linkedin />} link="#" />
            <SocialBtn icon={<Mail />} link="#" />
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-40 rounded-full"></div>
          <img 
            src="https://github.com/LuisFelipeNM.png" 
            alt="Perfil" 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-white/10 rotate-3 group-hover:rotate-0 transition duration-500"
          />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center"><span className="text-purple-400">Minhas</span> Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 />} title="Frontend" desc="React, Tailwind, HTML/CSS" />
            <SkillCard icon={<Terminal />} title="Backend" desc="Node.js, Python, SQL" />
            <SkillCard icon={<Cpu />} title="Engenharia" desc="C, Assembly, Hardware" />
            <SkillCard icon={<ExternalLink />} title="Ferramentas" desc="Git, VS Code, Linux" />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
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
      <footer id="contact" className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© 2025 Luís Felipe Nadalini Marafon. Feito com React & Tailwind.</p>
      </footer>

    </div>
  );
}

// Componentes Auxiliares (para não repetir código)
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