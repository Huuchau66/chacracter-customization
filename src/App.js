import { useState, useEffect } from "react";
import "./App.css";

const TOTAL = {
  body: 10,
	eyes: 10,
	hair: 10,
	mouths: 10
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouths, setMouths] = useState(0);
  

  const randomize = () => {
    setBody(Math.floor(Math.random() * TOTAL.body));
    setEyes(Math.floor(Math.random() * TOTAL.eyes));
    setHair(Math.floor(Math.random() * TOTAL.hair));
    setMouths(Math.floor(Math.random() * TOTAL.mouths));
    

  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="container">
      <div className="avatarBox">
      <h1>Character Customization</h1>
      <div className="avatar">
        <img src={process.env.PUBLIC_URL+`/character/body/${body}.png`} alt="" />
        <img src={process.env.PUBLIC_URL+`/character/eyes/${eyes}.png`} alt="" />
        <img src={process.env.PUBLIC_URL+`/character/hair/${hair}.png`} alt="" />
        <img src={process.env.PUBLIC_URL+`/character/mouths/${mouths}.png`} alt="" />
      </div>
      <button onClick={randomize}>Random</button>
      </div>

      <div className="ChoiseBox">

      <h3>Body</h3>
      <div className="list">
        {[...Array(TOTAL.body)].map((_, i) => (
          <img alt=""
            key={i}
            src={process.env.PUBLIC_URL+`/character/body/${i}.png`}
            onClick={() => setBody(i)}
          />
        ))}
      </div>

      <h3>Eyes</h3>
      <div className="list">
        {[...Array(TOTAL.eyes)].map((_, i) => (
          <img alt=""
            key={i}
            src={process.env.PUBLIC_URL+`/character/eyes/${i}.png`}
            onClick={() => setEyes(i)}
          />
        ))}
      </div>

      <h3>Hair</h3>
      <div className="list">
        {[...Array(TOTAL.hair)].map((_, i) => (
          <img alt=""
            key={i}
            src={process.env.PUBLIC_URL+`/character/hair/${i}.png`}
            onClick={() => setHair(i)}
          />
        ))}
      </div>

      <h3>Mouths</h3>
      <div className="list">
        {[...Array(TOTAL.mouths)].map((_, i) => (
          <img alt=""
            key={i}
            src={process.env.PUBLIC_URL+`/character/mouths/${i}.png`}
            onClick={() => setMouths(i)}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;