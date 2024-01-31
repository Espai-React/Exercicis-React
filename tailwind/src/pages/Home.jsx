import {
  BotoChat,
  BotoChatPetit,
  Chitchat,
} from '../components/index';

const Home = () => (
  // <div className="min-h-screen flex flex-col/* justify-center items-center */ place-items-center">
  <div className="pageHome--> grid min-h-screen place-content-center gap-2">
    <Chitchat />
    <div className="flex justify-center gap-4">
      <BotoChatPetit color='primari'>Un botó</BotoChatPetit>
      <BotoChatPetit color='secundari'>Un altre botó</BotoChatPetit>
    </div>
    <BotoChat>El millor botó</BotoChat>
    <BotoChat>Un altre botó</BotoChat>
  </div>
);

export default Home;
