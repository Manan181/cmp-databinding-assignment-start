import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrl: './game-control.component.css',
})
export class GameControlComponent {
	@Output() game = new EventEmitter<number>();
	number: number;
	interval: any;

	constructor() {
		this.number = 0;
	}

	onStartGame() {
		this.interval = setInterval(() => {
			this.number++;
			this.game.emit(this.number);
		}, 1000);
	}

	onStopGame() {
		clearInterval(this.interval);
	}
}
