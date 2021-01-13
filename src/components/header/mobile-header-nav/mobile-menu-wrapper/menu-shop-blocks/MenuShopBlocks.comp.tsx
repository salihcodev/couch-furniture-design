// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// IMPORT COMPONENTS:
import MenuBlock from './menu-block/MenuBlock.comp';

// INTERFACE:
interface Props {
  shopRoutes: Array<[]>;
}

// COMPONENT:=>
const MenuShopBlocks: React.FC<Props> = ({ shopRoutes }) => {
  return (
    <section className="menu-shop-blocks">
      {shopRoutes.map((block: any) => (
        <MenuBlock {...block} key={block.route} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ routes: { shopRoutes } }: any) => ({
  shopRoutes: shopRoutes,
});

export default connect(mapStateToProps)(MenuShopBlocks);
