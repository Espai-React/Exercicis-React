import React from "react";
import "./App.css";
import * as Component from "./components";

function App() {
  return (
    <div className="App">
      <Component.Comp1 />
      <Component.Random />
      <Component.RedPanda />
      <Component.Friends />
      <Component.TodaysPlan />
      <Component.IceCream />
      <Component.VeureProps
        myProp="La meva prop"
        myInfo={["top", "secret", "lol"]}
        nom="Jordi"
      />
      <Component.Greeting name="Alison" signedIn={true} />
      <Component.Talker />
      <Component.Llistes />
      <Component.Estat />
      <Component.Mood />
      <Component.ToggleColor />
      <Component.Clock />
      <Component.Question pregunta="Bon dia fa?" />
      <Component.ToggleOnOff />
      <Component.ColorPicker />
      <Component.ColorPickerArray />
      <Component.PhoneNumber />
      <Component.QuestionIndex />
      <Component.PersonalPizza />
      <Component.GroceryCart />
      <Component.Login />
      <Component.EditProfile />
      <Component.PageTitle />
      <Component.Counter />
      <Component.CounterEvent />
      <Component.Timer />
      <Component.Forecast />
      <Component.CanviNom />
      <Component.CanviNom2 />
      <Component.EstilInlineVariable />
      <Component.Frase />
      <Component.Pigs />
      <Component.Runner />
      <Component.BookList />
      <Component.FormControlat />
    </div>
  );
}

export default App;
