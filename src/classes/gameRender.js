import Game from "./Game";

const gameTiles = document.querySelector(".game_tiles");
const newGame = document.querySelector(".newGame");
const best = document.querySelector(".best");
const current = document.querySelector(".current");

function render(game) {
	gameTiles.innerHTML = "";
	current.innerHTML = `${game.score}`;

	for (let y = 0; y < game.tiles.length; y++) {
		for (let x = 0; x < game.tiles[y].length; x++) {
			if (!game.tiles[y][x]) continue;

			const tile = game.tiles[y][x];
			let div = document.createElement("div");
			div.innerHTML = tile.value;
			div.classList.add("tile"); //в css прописать надо

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
			game.moveLeft("left");
			render(game);
		}

		if (e.code == "KeyD") {
			game.moveRight();
			render(game);
		}
		if (e.code == "KeyW") {
			game.moveUp();
			render(game);
		}
		if (e.code == "KeyS") {
			game.moveDown();
			render(game);
		}
	});
}
