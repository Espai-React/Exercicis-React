import {useState} from 'react';

const Button = ({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>;
};

const Likes = ({ likesInicials }) => {
  console.log("Render Likes");
  const [cont, setCont] = useState({ val: likesInicials });

  return (
    <Button
      onClick={() => {
        console.log(cont);
        const cont2 = { ...cont };
        cont2.val++;
        console.log(cont2);
        setCont(cont2);
      }}>
      likes {cont.val}
    </Button>
  );
};

export default Likes;
