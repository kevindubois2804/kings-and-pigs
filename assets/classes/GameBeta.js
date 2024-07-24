import { biome1Data } from '../data/biome/biome1/biome1.js';
import { biome1Level1Events } from '../data/events/biome1/biome-1-level-1-events.js';
import { globalEvents } from '../data/events/global/global.js';
import { playerData } from '../data/player.js';
import BiomeBeta from './BiomeBeta.js';
import CanvasHandlerBeta from './CanvasHandlerBeta.js';
import EventHandlerBeta from './EvenHandlerBeta.js';
import PlayerBeta from './PlayerBeta.js';
import PlayerInputHandlerBeta from './PlayerInputHandlerBeta.js';
import UtilsBeta from './UtilsBeta.js';

export default class GameBeta {
  constructor({ context = null, canvasWidth, canvasHeight }) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.utils = new UtilsBeta({ game: this });
    this.canvasHandler = new CanvasHandlerBeta({ game: this, context: context, canvasWidth: canvasWidth, canvasHeight: canvasHeight });
    this.player = new PlayerBeta({ game: this, ...playerData });
    this.eventHandler = new EventHandlerBeta({ game: this, globalEvents: globalEvents, levelEvents: biome1Level1Events });

    this.playerInputHandler = new PlayerInputHandlerBeta({ game: this });

    this.biome = new BiomeBeta({ game: this, biomeLevelsData: biome1Data });

    this.currentState = 'RUNNING';
  }

  update(context) {
    this.biome.currentLevel.update(context);
  }

  draw(context) {
    this.biome.currentLevel.draw(context);
  }
}
