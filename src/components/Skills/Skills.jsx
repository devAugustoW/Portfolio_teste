import "./Skills.css";
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';

const Skills = () => {
  return (
   <section className='skills' id='skills'>
      <h2 className='section__skills-title'>Habilidades</h2>
      <span className='section__skills-subtitle'>Tecnologias</span>

      <div className='skills__container'>
         <Frontend />
         <Backend />
      </div>

   </section>
  )
}

export default Skills;