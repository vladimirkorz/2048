export default class Game {
	generateStyleSheet() {}
	newGame() {
		this.tiles = [
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
		];
		this.score = 0;
		this.spawnTile();
		this.spawnTile();
	}

	spawnTile(x, y, v) {
		//let v = (Math.round(Math.random()) + 1) * 2
		if (!x || !y) {
			if (Math.random() > 0.75) {
				v = 4;
			} else {
				v = 2;
			}
			let emptyCoords = this.findEmptySpaces();
			let emptyPos = (randomEmptyPos =
				emptyCoords[Math.floor(Math.random()) * emptyCoords.length]);
			x = emptyPos.x;
			y = emptyPos.y;
		}
		this.tiles[y][x] = new Tile(v);
	}

	findEmptySpaces() {
		//
		let emptyCoords = [];
		for (let y = 0; y < this.tiles[y].length; x++) {
			for (let x = 0; x < this.tiles[y].length; x++) {
				if (!this.tiles[y][x]) emptyCoords.push({ x, y });
			}
		}
		return emptyCoords;
	}

	moveLeft() {}
	moveRight() {}
	moveUp() {}
	moveDown() {}
}

const game = new Game();
