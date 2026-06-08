import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import TeamCard from './components/TeamCard';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-dark font-sans">
      
      <Navbar />
      <main>
        <Hero />
        <ServiceCard />
        <TeamCard />
        <Projects />
        <Reviews />
        <Contact />
      </main>  
      <Footer />
    </div>
  );
}

export default App;