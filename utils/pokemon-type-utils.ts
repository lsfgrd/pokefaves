const colors = {
  normal: {
    bg: "#c6c6a7",
    border: "#6d6d4e",
  },
  fire: {
    bg: "#f5ac78",
    border: "#9c531f",
  },
  water: {
    bg: "#9db7f5",
    border: "#445e9c",
  },
  grass: {
    bg: "#a7db8d",
    border: "#4e8234",
  },
  electric: {
    bg: "#fae078",
    border: "#a1871f",
  },
  ice: {
    bg: "#bce6e6",
    border: "#638d8d",
  },
  fighting: {
    bg: "#d67873",
    border: "#7d1f1a",
  },
  poison: {
    bg: "#c183c1",
    border: "#682a68",
  },
  ground: {
    bg: "#ebd69d",
    border: "#927d44",
  },
  flying: {
    bg: "#c6b7f5",
    border: "#6d5e9c",
  },
  psychic: {
    bg: "#fa92b2",
    border: "#a13959",
  },
  bug: {
    bg: "#c6d16e",
    border: "#6d7815",
  },
  rock: {
    bg: "#d1c17d",
    border: "#786824",
  },
  ghost: {
    bg: "#a292bc",
    border: "#493963",
  },
  dark: {
    bg: "#a29288",
    border: "#49392f",
  },
  dragon: {
    bg: "#a27dfa",
    border: "#4924a1",
  },
  steel: {
    bg: "#d1d1e0",
    border: "#787887",
  },
  fairy: {
    bg: "#f4bdc9",
    border: "#9b6470",
  },
};

const getBackgroundColor = (type: string) => {
  return colors[type]?.bg || null;
};

const getBorderColor = (type: string) => {
  return colors[type]?.border || null;
};

export {
  getBackgroundColor,
  getBorderColor,
}