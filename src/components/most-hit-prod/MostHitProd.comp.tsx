// BASIC:
import './style.sass';

// UTILITIES:
import MiniSliderList from '../mini-slider-list/MiniSliderList.comp';

// INTERFACE:
interface MostHitProdsProps {}

// COMPONENT:=>
const MostHit: React.FC<MostHitProdsProps> = () => {
  return (
    <section className="most-hit-prod">
      <MiniSliderList
        title="most hit products."
        desc="items that get clicks a lot from the users."
      />
    </section>
  );
};

export default MostHit;
