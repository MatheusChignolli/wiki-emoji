import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';
import Card from '../Card/Card';

export default function Section() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {

      const response = await api.get("/emojis?access_key=da4e02697cec8b181bb518e79939dab6244b9bb1");
      console.log(response);
      setCards(response.data)
    }

    loadCards();
  }, []);

  return (
    <div className="container">
      {
        cards.map((card, index) => (
          <Card 
            character={card.character} 
            name={card.unicodeName} 
            slug={card.slug} 
            codePoint={card.codePoint}
            group={card.group} 
            subGroup={card.subGroup} 
            key={index} />
        ))
      }
    </div>
  )
}