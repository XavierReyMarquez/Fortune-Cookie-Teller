const getCard = async () => {
  const response = await fetch(
    'https://rws-cards-api.herokuapp.com/api/v1/cards'
  );
  const cardData = await response.json();
  console.log(cardData);
};

getCard();
