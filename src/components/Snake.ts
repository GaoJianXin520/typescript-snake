
export default class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇头的X轴
    get x() {
        return this.head.offsetLeft;
    }

    //设置蛇头的X轴
    set x(value: number) {
        if (this.x === value) return;
        if (value < 0 || value > 290) throw new Error('GAME OVER');
        this.move();
        this.head.style.left = `${value}px`;
        this.checkHeadBody();
    }

    //获取蛇头的Y轴
    get y() {
        return this.head.offsetTop;
    }

    //设置蛇头的Y轴
    set y(value: number) {
        if (this.y === value) return;
        if (value < 0 || value > 290) throw new Error('GAME OVER');
        this.move();
        this.head.style.top = `${value}px`;
        this.checkHeadBody();
    }

    //增加蛇身
    add() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    //移动蛇身
    move() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = `${x}px`;
            (this.bodies[i] as HTMLElement).style.top = `${y}px`;
        }
    }

    //检查蛇头蛇身相撞
    checkHeadBody() {
        for (let i = 4; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) throw Error('GAME OVER');
        }
    }
}
