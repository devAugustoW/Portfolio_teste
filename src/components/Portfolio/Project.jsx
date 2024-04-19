const Project = (props) => {
   const handleViewProject = () => {
      window.open(props.link, '_blank');
   }

   return (
      <div className="project__box">
         <div className="project__img_content">
            <img className="project__img" src={props.image} alt="foto do projeto" />
         </div>
         
         <div className="project__box_separator">
            <div className="project__data">
               <div>
                  <h3 className='project__title'>{props.title}</h3>
                  <p className="project__describe">{props.describe}</p>
               </div>
               <button onClick={handleViewProject} className="project__button">
                  Ver projeto{" "}
                  <i className='bx bx-right-arrow-alt project__button-icon'></i>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Project;