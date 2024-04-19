import "./Home.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
   return (
      <section className="home">

         <div className="home__content">
            <Social />
            <div className="home__img"></div>
            <Data />
         </div>

         <ScrollDown />
         
      </section>
   )
}

export default Home;