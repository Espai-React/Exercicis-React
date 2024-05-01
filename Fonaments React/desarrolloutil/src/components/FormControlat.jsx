import { useState } from 'react';

const login = (mail, password) => {
  if (mail === "hola@hola.com" && password === "test") alert("Login correcte");
  else alert("Login incorrecte");
};

const validate = (mail, password) => {
  if (!mail.includes("@")) return "mail incorrecte";
  if (password.length < 4) return "clau de pas incorrecta";
};

const FormControlat = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail, password);
    login(mail, password);
  };

  const error = validate(mail, password);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="email"
        placeholder="e-mail..."
        autoComplete="off"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="clau de pas..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={error}>
        Inciar sessió
      </button>
      <p>{error}</p>
    </form>
  );
};

export default FormControlat;
