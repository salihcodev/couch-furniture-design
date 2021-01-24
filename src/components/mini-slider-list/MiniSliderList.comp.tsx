// BASIC:
import './style.sass';

// UTILITIES:
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// COMPONENTS:
import SliderItemProps from '../slider-item/SlideItem.comp';

// INTERFACE:
interface MiniSliderListProps {
  newArrivals: any;
  title?: string;
  desc?: string;
}

// COMPONENT:=>
const MiniSliderList: React.FC<MiniSliderListProps> = ({
  newArrivals,
  title,
  desc,
}) => {
  const items = newArrivals.map(({ imgUrl }: any) => (
    <SliderItemProps img={imgUrl} idx={5} withStyle />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    769: { items: 1 },
    990: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <section className="mini-slider-list">
      <h5 className="heading">
        <Link to="new">{title}</Link>
      </h5>
      <div className="text">
        <p>{desc}</p>
      </div>
      <section className="items-slider">
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayControls={false}
          autoPlayStrategy="none"
          autoPlayInterval={5000}
          animationDuration={500}
          animationType="slide"
          infinite
          touchTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </section>
    </section>
  );
};

const mapStateToProps = ({ products: { itemsToTest } }: any) => ({
  newArrivals: itemsToTest,
});

export default connect(mapStateToProps)(MiniSliderList);
