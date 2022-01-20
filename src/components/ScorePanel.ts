export default class ScorePanel {
    private score: number = 0;
    private level: number = 0;
    private maxLevel: number;  //最高等级
    private upScore: number;  //升级阈值
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    //增加分数
    addScore() {
        this.scoreEle.innerHTML = `${++this.score}`;
        if (this.score % this.upScore === 0) {
            this.addLevel();
        }
    }

    //增加等级
    protected addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = `${++this.level}`;
        }
    }
}