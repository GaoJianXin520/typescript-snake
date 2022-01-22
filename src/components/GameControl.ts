import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

export default class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    direction: string = '';
    gameOver: boolean = false;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }

    keydownHandler(e: KeyboardEvent) {
        this.direction = e.key;
        this.run();
    }

    //移动蛇
    run() {
        let x = this.snake.x;
        let y = this.snake.y;

        switch(this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                y += 10;
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                x -= 10;
                break;
        }

        this.snake.x = x;
        this.snake.y = y;

        !this.gameOver && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
}