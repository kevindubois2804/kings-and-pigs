import { biomeOneLevelOneData } from '../data/biome/biome1/level1/biome-1-level-1.js';
import { globalEvents } from '../data/events/global/global.js';
import { playerData } from '../data/player.js';
import CanvasHandlerBeta from './CanvasHandlerBeta.js';
import EventHandlerBeta from './EvenHandlerBeta.js';
import LevelBeta from './LevelBeta.js';
import PlayerBeta from './PlayerBeta.js';
import PlayerInputHandlerBeta from './PlayerInputHandlerBeta.js';
import UtilsBeta from './UtilsBeta.js';

export default class GameBeta {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.utils = new UtilsBeta({ game: this });
    this.canvasHandler = new CanvasHandlerBeta({ game: this });
    this.player = new PlayerBeta({ game: this, ...playerData });
    this.eventHandler = new EventHandlerBeta({ game: this, globalEvents });
    this.playerInputHandler = new PlayerInputHandlerBeta({ game: this });

    this.level = new LevelBeta({ game: this, ...biomeOneLevelOneData });
  }

  update(context) {
    this.level.update(context);
  }

  draw(context) {
    this.level.draw(context);
  }
}
