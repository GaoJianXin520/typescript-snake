import './style/index.less';

import Food from './components/Food';
import ScorePanel from './components/ScorePanel';

const f = new Food();
f.change();

const panel = new ScorePanel();
for (let i = 0; i < 100; i++) {
    panel.addScore();
}