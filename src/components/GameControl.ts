import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

export default class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    direction: string = '';
    gameOver: boolean = false;
    timeoutId: number = 0;

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
        if (this.direction === 'ArrowUp' && e.key === 'ArrowDown' || this.direction === 'ArrowDown' && e.key === 'ArrowUp') return;
        if (this.direction === 'ArrowRight' && e.key === 'ArrowLeft' || this.direction === 'ArrowLeft' && e.key === 'ArrowRight') return;
        if (this.direction === 'Up' && e.key === 'Down' || this.direction === 'Down' && e.key === 'Up') return;
        if (this.direction === 'Right' && e.key === 'Left' || this.direction === 'Left' && e.key === 'Right') return;

        this.direction = e.key;
        clearTimeout(this.timeoutId);
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

        this.checkEat(x, y);

        try {
            this.snake.x = x;
            this.snake.y = y;
        } catch(e) {
            alert(e);
            this.gameOver = true;
        }

        if (!this.gameOver) {
            this.timeoutId = setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30) as any;
        }
    }

    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.add();
        }
    }
}