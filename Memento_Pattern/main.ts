import Game from "./game.ts";
import GameHistory from "./gameHistory.ts";

const game = new Game();
const gameHistory = new GameHistory();

game.setLevel(2);
gameHistory.addSavePoint(1, game.createMemento());
console.log(game.getLevel());

game.setLevel(3);
gameHistory.addSavePoint(2, game.createMemento());
console.log(game.getLevel());


game.restore(gameHistory.getSavedPoint(1));
console.log(game.getLevel());


game.restore(gameHistory.getSavedPoint(2));
console.log(game.getLevel());
