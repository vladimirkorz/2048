import { useCallback } from "react";
import Tile from "./Tile.js";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export default class Game {
	constructor() {
		this.tileSize = 100;
		this.tileCount = 4;
		// пока не нужны

		this.score = 0;
		this.bestScore = 0;

		this.tiles = [
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
			[null, null, null, null],
		];
	}

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
			let { x: newX, y: newY } =
				emptyCoords[getRandomInt(emptyCoords.length)];
			x = newX;
			y = newY;
		}
		this.tiles[y][x] = new Tile(v)
	}

	findEmptySpaces() {
		//
		let emptyCoords = [];
		for (let y = 0; y < this.tiles.length; y++) {
			for (let x = 0; x < this.tiles[y].length; x++) {
				if (!this.tiles[y][x]) emptyCoords.push({ x, y });
			}
		}
		return emptyCoords;
	}


	move(direction){
		let.move
		//проверка свободного слота для движения
		const dir = {
			right: {x: 1, y: 0, startX: 0, endX: 3, stepX: 1,startY: 0 , endY: 3, stepY: 1},
			left: {x: -1, y: 0, startX: 3, endX: 0, stepX: -1,startY: 0 , endY: 3, stepY: 1},
			down: {x: 0, y: 1, startX: 0, endX: 3, stepX: 1,startY: 0 , endY: 3, stepY: 1},
			up: {x: 0, y: -1, startX: 0, endX: 3, stepX: 1,startY: 3 , endY: 0, stepY: 1},
		}[direction]

		const get = (x, y) => this.tiles[y]?.[x]
		const set = (x, y, v) => (this.tiles[y][x] = v)

		const loop = (Callback) => {
			for(let y = dir.startY; 
				dir.stepY > 0 ? y <= dir.end: y >= dir.endY; 
				y += dir.stepY
			){
			
			for(let x = dir.startY; 
				dir.stepX > 0 ? x <= dir.end: x >= dir.endX; 
				x += dir.stepX
			)
			 }
				{Callback(x, y)

				}
			}
		
	
			loop((x, y)=>{
				const tile = get(x, y)
				if(!tile) return

				let nx = x, ny = y

				while (true){
					const nextX = nx + dir.x
					const nextY = ny + dir.y
					const next = get(nextX, nextY)
					if (nextX < 0 || nextX >= 4 || nextY >= 4) break
					if (!next){
						set(nextX, nextY, tile)
						set(nx, ny, null)
						nx = nextX
						ny = nextY
					}
				}
			})
		}

	moveLeft() {
		for (let i = 0; y < this.tiles.length; y++) {
			if (this.tiles[y][x]) {
				this.tiles[y][0] = this.thiles[y][x];
				this.tiles[y][x] = null;
			}
		}
		this.spawnTile;
	}
	moveRight() {
		for (let i = 0; y < this.tiles.length; y++) {
			if (this.tiles[y][x]) {
				this.tiles[y][x] = this.thiles[y][x];
				this.tiles[y][0] = null;
			}
		}
	}
	moveUp() {}
	moveDown() {}
}
