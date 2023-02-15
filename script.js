const input = document.querySelector("#test-1");
const button = document.querySelector("#test-2");
const player1 = document.querySelector("#player-1-conainer");
input.addEventListener("input", () => {});

button.addEventListener("click", async () => {
  try {
    const deck = await shuffled(1);
    const deckData = await deck.json();
    const { deck_id } = deckData;
    const card = await drawACard(deck_id, 2);
    const cardData = await card.json();
    const { cards } = cardData;
    // const card1 = cards[0];
    cards.forEach((card) => {
      const img = document.createElement("img");
      img.setAttribute("src", card.images.svg);
      console.log({ img, card });
      player1.append(img);
    });

    // console.log({ cardData });
  } catch (error) {
    // console.error(error);
  }
});

async function shuffled(number) {
  const DECK_URL = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${number}`;
  const deck = await fetch(DECK_URL);
  return deck;
}

async function drawACard(deckId, number) {
  const CARD_URL = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${number}`;
  const card = await fetch(CARD_URL);
  return card;
}
