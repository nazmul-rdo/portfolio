import Profile from './PortfolioContainer/Home/Profile'
import Menu from './PortfolioContainer/MenuBar/Menu';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import './App.css';
import Footer from './PortfolioContainer/Footer/Footer';
import Skill from './PortfolioContainer/Skill/Skill';
import Protfilio from './PortfolioContainer/Portfilio/Protfilio';


function App() {
  return (
    <div className="App">
      <Menu />
      <Profile />
      <AboutMe />
      <Skill />
      <Protfilio />
      <ContactMe />
      <Footer />
      
       
       

    </div>
  );
}

export default App;
