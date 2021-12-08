import React from "react";
import { useEffect, useState } from "react";
import Preload from "./Preload";


const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [preLoad, Load] = useState(true);

  const getData = async () => {
    const rawAPIData = await fetch("https://type.fit/api/quotes");
    Load(false)
    setQuotes(await rawAPIData.json());
  };

  useEffect(() => {
    getData();
  });

  if(preLoad){
      return(
          <Preload />
      )
  }

  return (
    <div className="main">
      {quotes.map((quote) => {
        return (
          <div className="quoteWrapper">
            <h1>{quote.text}</h1>
            {quote.author === null ? <p>Unknown</p> : <p>{quote.author}</p>}
          </div>
        );
      })}
    </div>
  );
  
};

export default App;
