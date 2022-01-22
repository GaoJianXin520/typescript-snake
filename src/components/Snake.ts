
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
        this.head.style.left = `${value}px`;
    }

    //获取蛇头的Y轴
    get y() {
        return this.head.offsetTop;
    }

    //设置蛇头的Y轴
    set y(value: number) {
        if (this.y === value) return;
        this.head.style.top = `${value}px`;
    }

    //增加蛇身
    add() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }
}
