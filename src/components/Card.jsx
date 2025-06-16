import PropTypes from 'prop-types';

const Card = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 
      ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1' : ''} 
      ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
};

export default Card;