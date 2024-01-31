import PropTypes from 'prop-types';

const BotoChat = ({children}) => (
  <button className="from-great-blue-300 to-great-blue-700 hover:text-gray-300 rounded-lg bg-gradient-to-r px-4 py-2 text-white shadow-lg transition-all hover:bg-white focus:ring active:translate-y-1">
    {children}  </button>
);

BotoChat.propTypes = {
  children: PropTypes.node
};

export default BotoChat;
