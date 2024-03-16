import PropTypes from 'prop-types';

const BotoChatPetit = ({ color, children }) => (
  <button
    className={`Botó-petit--> w-1/2 ${color} rounded-lg px-4 py-2 text-white shadow-lg transition-all hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-900 focus:ring active:translate-y-1`}
  >
    {children}
  </button>
);

BotoChatPetit.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default BotoChatPetit;
