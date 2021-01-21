// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const WishList: React.FC<Props> = () => {
  return (
    <main className="wishlist-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Your wishlist, Try to move them to your bag"
      />
    </main>
  );
};

export default WishList;
