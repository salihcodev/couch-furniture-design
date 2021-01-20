// BASIC:
import './style.sass';

// UTILITIES:
import tradeHeroImg from '../../assets/hero/trade-hero.jpg';

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import TradeFeatures from '../../components/trade-features/TradeFeatures.comp';
import Banner from '../../components/banner/Banner.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Trade: React.FC<Props> = () => {
  return (
    <main className="reade-page">
      <Hero
        cover={tradeHeroImg}
        mini={false}
        heroTitle="Let's start businesses with each other"
        heroDesc="Distinctive, original essentials for well-designed spaces."
        btn1Text="Request account!"
        btn1Path="/contact"
      />

      {/* trade features */}
      <TradeFeatures />

      {/* trade banner */}
      <Banner
        headingTxt="Preferred Pricing"
        headingClr=""
        descTxt="Enjoy our lowest tier of wholesale pricing in the industry with your qualified opening order."
        descClr=""
        bkg="#696969"
        height={25}
        btnTxt="Request account!"
        btnClr="#fff"
        btnBorderClr="#fff"
        btnBkg="#D8B87E"
        btnRadius={true}
        withBtn={true}
      />
    </main>
  );
};

export default Trade;
