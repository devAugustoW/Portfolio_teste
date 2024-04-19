import "./Footer.css";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
         <h1 className='footer__title'>Augusto Dantas</h1>


         <ul className='footer__list'>
            <li>
               <a href="#" className='footer__link'>Home</a>
            </li>
            <li>
               <a href="#about" className='footer__link'>Sobre</a>
            </li>

            <li>
               <a href="#portfolio" className='footer__link'>Projetos</a>
            </li>
         </ul>
      </div>

      <div className='footer__social'>
         <a href="https://github.com/devAugustoW" className='footer__social-link' target="_blank">
            <i className='bx bxl-github'></i>
         </a>

         <a href="https://instagram.com" className='footer__social-link' target="_blank">
            <i className='bx bxl-instagram'></i>
         </a>

         <a href="https://twiter.com/" className='footer__social-link' target="_blank">
            <i className='bx bxl-twitter'></i>
         </a>
      </div>

      <span className='footer__copy'>
         &#169;Augusto Dantas. Todos os direitos reservados.
      </span>
    </footer>
  )
}

export default Footer