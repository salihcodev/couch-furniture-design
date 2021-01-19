// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:

// INTERFACE:
interface SliderItemProps {
  img: any;
  idx: any;
}

// COMPONENT:=>
const SliderItem: React.FC<SliderItemProps> = ({ img, idx }) => {
  const handleDragStart = (e: any) => e.preventDefault();
  return (
    <div className="slider-item" onDragStart={handleDragStart}>
      <div style={{ background: `url(${img}) center/contain no-repeat` }}></div>
    </div>
  );
};

export default SliderItem;
