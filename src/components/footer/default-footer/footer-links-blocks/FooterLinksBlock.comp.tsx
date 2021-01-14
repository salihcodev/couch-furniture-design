// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// IMPORT COMPONENTS:
import LinksBlock from './links-block/LinksBlock.comp';
import { Row } from 'react-bootstrap';

// INTERFACE:
interface Props {
  footerLinks: Array<[]>;
}

// COMPONENT:=>
const FooterLinksBlock: React.FC<Props> = ({ footerLinks }) => {
  return (
    <section className="links-wrapper">
      <div className="center-blocks">
        <Row>
          {footerLinks.map(({ title, nested }: any) => (
            <LinksBlock key={title} nested={nested} title={title} />
          ))}
        </Row>
      </div>
    </section>
  );
};

const mapStateToProps = ({ footer: { links } }: any) => ({
  footerLinks: links,
});
export default connect(mapStateToProps)(FooterLinksBlock);
