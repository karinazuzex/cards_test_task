import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState({});

  const addCard = () => {
    const id = btoa(Date.now());
    const num = randomInteger(0, 100);
    const card = { id, num };
    const newCards = { ...cards, [card.id]: card };
    setCards(newCards);
  };
  const removeCard = (id) => (e) => {
    const newCards = { ...cards };
    delete newCards[id];

    setCards(newCards);
  };

  const sortCard = () => {
    const newCards = {};
    const keys = Object.keys(cards);
    keys.sort(function (a, b) {
      if (cards[a].num < cards[b].num) {
        return -1;
      }
      if (cards[a].num > cards[b].num) {
        return 1;
      }
      return 0;
    });
    keys.forEach((key) => {
      newCards[key] = cards[key];
    });
    setCards(newCards);
  };
  const randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  return (
    <div className="App">
      <Header addCard={addCard} sortCard={sortCard} />
      <Content cards={cards} removeCard={removeCard} />
      <Footer />
    </div>
  );
}

export default App;
