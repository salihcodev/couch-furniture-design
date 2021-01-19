// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:

// INTERFACE:
interface SliderItemProps {
  img: any;
  idx: any;
  withStyle?: boolean;
}

// COMPONENT:=>
const SliderItem: React.FC<SliderItemProps> = ({ img, idx, withStyle }) => {
  const handleDragStart = (e: any) => e.preventDefault();

  let styles = {};
  if (withStyle) {
    styles = { border: `1px solid #5e7a91`, borderRadius: `0.7rem` };
  } else {
    styles = {};
  }

  return (
    <div className="slider-item" onDragStart={handleDragStart}>
      <div
        style={{
          background: `url(${img}) center/contain no-repeat`,
          ...styles,
        }}
      ></div>
    </div>
  );
};

export default SliderItem;
