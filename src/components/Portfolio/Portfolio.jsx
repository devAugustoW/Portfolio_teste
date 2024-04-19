import "./Portfolio.css";
import photo1 from "../../assets/HooBank_portfolio.png";
import photo2 from "../../assets/projeto_sistema-de-pedido.png";
import photo3 from "../../assets/miniBlog.png";

import Project from "./Project";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "HooBank",
      image: photo1,
      describe: "Explore um mundo de possibilidades com este site criado em React e estilizado com Tailwind CSS. É de uma experiência fluida e intuitiva, totalmente responsiva em qualquer dispositivo. Navegue com facilidade e descubra a excelência em design e tecnologia que colocamos em cada pixel.",
      link: "https://hoobank-web-site.vercel.app/"
    },
   
    {
      id: 2,
      title: "Sistema de Pedidos", 
      image: photo2,
      describe: "Sistema de pedidos básico, utilizando no frontend React, Axios para comunicação com o servidor e React-Dock para uma interface amigável e intuitiva. No backend, implementei uma API  utilizando Node.js e Express, enquanto o armazenamento de dados foi gerenciado de forma com SQLite.",
      link: "https://sistema-de-pedidos.netlify.app/"
    },

  ]


  return (
    <section className="portfolio" id="portfolio">
        <h2 className='section__portfolio-title'>Projetos</h2>
        <span className='section__portfolio-subtitle'>Meus Projetos</span>

        <div className="portfolio__container">
          {projects.map((project) => (
            <Project 
              key={project.id}
              title={project.title}
              describe={project.describe}
              image={project.image}
              link={project.link} />
          ))}
        </div>
    </section>
  )
}

export default Portfolio;