export default class ScorePanel {
    score: number = 0;
    level: number = 0;
    maxLevel: number;  //最高等级
    upScore: number;  //升级阈值
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

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
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = `${++this.level}`;
        }
    }
}