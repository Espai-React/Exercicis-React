import {
  BotoChat,
  BotoChatPetit,
  BotoMode,
  Chitchat,
} from '../components';

const Home = () => (
  // <div className="min-h-screen flex flex-col/* justify-center items-center */ place-items-center">
  <div className="pageHome--> grid min-h-screen place-content-center gap-2">
    <BotoMode />
    <Chitchat />
    <div className="flex justify-center gap-4">
      <BotoChatPetit color="bg-sistema-primari">Un botó</BotoChatPetit>
      <BotoChatPetit color="bg-sistema-secundari">Un altre botó</BotoChatPetit>
    </div>
    <BotoChat>El millor botó</BotoChat>
    <BotoChat>Un altre botó</BotoChat>
  </div>
);

export default Home;
