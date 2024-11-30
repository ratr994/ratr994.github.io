const game = new Vue({
  el: "#app",
  data() {
    return {
      timer: null,
      turn: 0,
      flippedCards: [],
      deckOfCards: [],
      allPairsAreFound: false,
      cards: ["🎈", "🎆", "🎇", "🎉", "⚽", "🍟"] };

  },
  methods: {
    isFlippedClass({ id, isPairFound }) {
      return {
        flipped: this.flippedCards.find(x => x.id === id),
        matchingPair: isPairFound };

    },
    onClick(card, index) {
      if (!card.isPairFound) {
        clearTimeout(this.timer);
        this.flippedCards =
        this.flippedCards.length === 2 ?
        [{ ...card, index }] :
        [...this.flippedCards, { ...card, index }];
      }
    },
    shuffle(cards) {
      return cards.sort(() => Math.random() - 0.5);
    },
    replay() {
      clearTimeout(this.timer);
      this.turn = 0;
      this.flippedCards = [];
      this.cards = this.cards.map(x => {
        return { ...x, isPairFound: false };
      });
      this.deckOfCards = this.shuffle(this.cards);
    } },

  watch: {
    flippedCards(cards) {
      if (cards.length === 2) {
        this.turn++;
        if (cards[0].content === cards[1].content) {
          this.deckOfCards[cards[0].index].isPairFound = true;
          this.deckOfCards[cards[1].index].isPairFound = true;
        } else if (cards[0].content !== cards[1].content) {
          const self = this;
          this.timer = setTimeout(() => {
            self.flippedCards = [];
          }, 2000);
        }
        this.allPairsAreFound = this.deckOfCards.every(x => x.isPairFound);
      }
    } },

  mounted() {
    // Create all cards obj
    this.cards = this.cards.map((x, index) => {
      return { id: index, content: x, isPairFound: false };
    });

    // Dupplicate obj to get pairs and concat them to the existing array
    this.cards = this.cards.concat(
    this.cards.slice().map(({ content, id }) => {
      return { id: this.cards.length + id, content };
    }));


    this.deckOfCards = this.shuffle(this.cards);
  } });