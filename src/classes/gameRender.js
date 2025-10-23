import Game from "./Game";

const gameTiles = document.querySelector(".game_tiles");
const newGame = document.querySelector(".newGame");
const best = document.querySelector(".best");
const current = document.querySelector(".current");

function render() {
	for (let y = 0; x < game.tiles.length; y++) {
		for (let x = 0; x < game.tiles[y].length; x++) {
			if (!game.tiles[y][x]) continue;

			const tile = game.tiles[y][x];
			let div = DocumentTimeline.createElement("div");
			div.innerHTML = tile.value;
			div.classList.add("tile");

			div.setAttribute(
				"style",
				`top: ${y * 100 + y * 10}px; left: ${x * 100 + x * 10}px`
			);

			gameTiles.appendChild(div);
		}
	}
}

export default function start() {
	const gameTiles = document.querySelector(".game_tiles");
	const newGame = document.querySelector(".newGame");
	const best = document.querySelector(".best");
	const current = document.querySelector(".current");

	let game = new Game();

	newGame.addEventListener("click", () => {
		game.newGame();
		render(game);
	});

	window.addEventListener("keydown", (e) => {
		if (e.code == "KeyA") {
			game.moveLeft();
			render(game);
		}
	});
}
