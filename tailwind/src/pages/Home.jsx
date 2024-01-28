import bubbles from "../assets/bubbles.svg";

const Home = () => (
  <div className=" contenidor flex items-end gap-6 max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl">
    <div className="contenidor-img flex-shrink-0">
      <img className="w-12 h-12" src={bubbles} alt="ChitChat Logo"/>
    </div>
    <div className="contenidor-text">
      <h4 className="text-[#1a202c] text-xl leading-tight">ChitChat</h4>
      <p className="text-[#718096] text-base">You have a new message!</p>
    </div>
  </div>
);

export default Home;
