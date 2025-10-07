import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBarAndFilters from './components/SearchBarAndFilters';
import PopularCategories from './components/PopularCategories';
import FeaturedRooms from './components/FeaturedRooms';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CalendarAndInfo from './components/CalendarAndInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBarAndFilters />
      <PopularCategories />
      <FeaturedRooms />
      <Benefits />
      <Testimonials />
      <CalendarAndInfo />
      <Footer />
    </div>
  );
}

export default App;