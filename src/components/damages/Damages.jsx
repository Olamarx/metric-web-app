import PropTypes from 'prop-types';
import './damages.css';

const Damages = ({ inten, col }) => (
  <div className="dam-container">
    <div style={{
      background: `linear-gradient(to bottom, ${col} 0%, transparent ${1.1 * (inten - 1)}%)`,
    }}
    />
    <div style={{
      background: `linear-gradient(to right, ${col} 0%, transparent ${1.5 * (inten - 1)}%)`,
    }}
    />
    <div style={{
      background: `linear-gradient(to left, ${col} 0%, transparent ${1.5 * (inten - 1)}%)`,
    }}
    />
    <div style={{
      background: `linear-gradient(to top, ${col} 0%, transparent ${1.5 * (inten - 1)}%)`,
    }}
    />
  </div>
);

Damages.propTypes = {
  inten: PropTypes.number.isRequired,
  col: PropTypes.string.isRequired,
};

export default Damages;
