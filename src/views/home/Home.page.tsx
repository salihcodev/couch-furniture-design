// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import heroHome from '../../assets/hero/home-hero.jpg';
import Services from '../../components/services/Services.comp';
import Categories from '../../components/categories/Categories.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const HomePage: React.FC<Props> = () => {
  return (
    <div className="home-page">
      <Hero
        cover={heroHome}
        mini={false}
        heroTitle="We are your next dream room"
        heroDesc="From concept to reality, browse our latest designs now available."
        btn1Text="Shop now!"
        btn1Path="/shop"
      />

      {/* services */}
      <Services />
      {/* categories */}
      <Categories />
    </div>
  );
};

export default HomePage;
