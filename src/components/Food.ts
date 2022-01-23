export default class Food {
    element: HTMLElement;  //食物所对应的元素
    
    constructor() {
        this.element = document.getElementById('food')!;
    }

    //获取食物的X轴坐标
    get x() {
        return this.element.offsetLeft;
    }

    //获取食物Y轴坐标
    get y() {
        return this.element.offsetTop;
    }

    //改变食物的位置
    change() {
        /**
         * 生成一个随机的位置
         * 区间[0, 290]
         * 蛇移动一次是一格，食物的位置为10的倍数
         */

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}
