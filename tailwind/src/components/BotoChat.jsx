import PropTypes from 'prop-types';

const BotoChat = ({ children }) => {
  // Tailwind
  const estils = `
    rounded-lg 
    bg-gradient-to-r
    from-great-blue-300
    to-great-blue-700
    dark: from-great-blue-700
    dark: to-great-blue-300
    px-4 py-2
    text-white
    shadow-lg
    hover: text-gray-300
    hover:from-white
    hover:to-white
    hover:text-gray-900
    hover:border-2
    hover:border-gray-900
    transition-all
    active: translate-y-1
    focus:ring
  `;

  return <button className={estils}>{children} </button>;
};

export default BotoChat;

BotoChat.propTypes = {
  children: PropTypes.node,
};
