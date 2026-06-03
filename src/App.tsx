import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import TeamCard from './components/TeamCard';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-white text-dark font-sans">
      
      <Navbar />  
      <Hero />
      <ServiceCard />
      <TeamCard />
      <Projects />

    </div>
  );
}

export default App;