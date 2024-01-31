import bubbles from '../assets/bubbles.svg';

const Chitchat = () => (
  <div className="contenidor--> mx-auto my-0 flex max-w-sm items-end gap-6 rounded-lg bg-white p-6 shadow-lg">
    <div className="contenidor-img--> flex-shrink-0">
      <img className="h-12 w-12" src={bubbles} alt="ChitChat Logo" />
    </div>
    <div className="contenidor-text-->">
      <h4 className="text-xl leading-tight text-[#1a202c]">ChitChat</h4>
      <p className="text-base text-[#718096]">You have a new message!</p>
    </div>
  </div>
);

export default Chitchat;
