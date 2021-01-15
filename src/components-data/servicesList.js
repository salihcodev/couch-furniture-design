// UTILITIES:
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FiHome, FiBox } from 'react-icons/fi';
import { GiPencilRuler } from 'react-icons/gi';
import { AiOutlineSwitcher } from 'react-icons/ai';

const servicesList = [
  {
    icon: <FaRegMoneyBillAlt />,
    description: 'High-end design without high-end prices.',
  },
  { icon: <FiHome />, description: 'Try at home for 30 days risk free.' },
  {
    icon: <FiBox />,
    description: 'Fast & free shipping to your home or office.',
  },
  {
    icon: <GiPencilRuler />,
    description: 'Free swatches make decisions easier.',
  },
  {
    icon: <AiOutlineSwitcher />,
    description: 'Free professional room planning.',
  },
];

export default servicesList;
