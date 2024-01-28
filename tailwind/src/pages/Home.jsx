import bubbles from "../assets/bubbles.svg";

const Home = () => (
  <div className="chat-notification">
    <div className="chat-notification-logo-wrapper">
      <img className="chat-notification-logo" src={bubbles} alt="ChitChat Logo"/>
    </div>
    <div className="chat-notification-content">
      <h4 className="chat-notification-title">ChitChat</h4>
      <p className="chat-notification-message">You have a new message!</p>
    </div>
  </div>
);

export default Home;

/* <style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
 */