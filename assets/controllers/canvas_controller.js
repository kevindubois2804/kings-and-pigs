import { Controller } from '@hotwired/stimulus';
import Player from '../classes/Player.js';
import CanvasEventListeners from '../classes/CanvasEventListeners.js';
import Sprite from '../classes/Sprite.js';
import '../data/collisions.js';
import { animationsImageSrcResolver, collisionBlockArrayPopulaterFromRawData, imageSrcResolver } from '../utils/kings-and-pigs-helpers-functions.js';
import { collisionsLevel1 } from '../data/collisions.js';
import { playerAnimations } from '../data/player-animations.js';
import { doorsLevel1 } from '../data/doors.js';
import { backgroundLevel1 } from '../data/backgrounds.js';

export default class extends Controller {
  static values = {
    backgroundLevelOneSprite: String,
    playerIdleLeftSprite: String,
    playerIdleRightSprite: String,
    playerRunLeftSprite: String,
    playerRunRightSprite: String,
    playerEnterDoorSprite: String,
    doorsLevelOneSprite: String,
  };

  static targets = ['toile'];

  doors = [];

  nextPlayerNameIncrement = 0;

  connect() {
    let context = this.toileTarget.getContext('2d');
    this.#putCanvasIntoSixteenByNineRatio();
    this.backgroundLevelOneSprite = new Sprite(imageSrcResolver(backgroundLevel1, this.backgroundLevelOneSpriteValue));
    this.collisionsBlockLevel = collisionBlockArrayPopulaterFromRawData(collisionsLevel1);

    this.doors.push(new Sprite(imageSrcResolver(doorsLevel1, this.doorsLevelOneSpriteValue)));

    this.createPlayer(this.collisionsBlockLevel, this.playerIdleLeftSpriteValue, 11, animationsImageSrcResolver(playerAnimations, this.playerIdleLeftSpriteValue, this.playerIdleRightSpriteValue, this.playerRunLeftSpriteValue, this.playerRunRightSpriteValue, this.playerEnterDoorSpriteValue));

    this.canvasEventListeners = new CanvasEventListeners(this.player, this.doors);

    this.canvasEventListeners.fireKeyBoardEventListeners();

    this.animate(context);
  }

  animate = (context) => {
    window.requestAnimationFrame(() => {
      this.animate(context);
    });

    this.backgroundLevelOneSprite.draw(context);

    this.#drawCollectionOfStuffOnCanvas(this.collisionsBlockLevel, context);
    this.#drawCollectionOfStuffOnCanvas(this.doors, context);

    this.player.velocity.x = 0;

    this.canvasEventListeners.handleInput();

    this.player.draw(context);

    this.player.updatePlayerAttributes(context);
  };

  #drawCollectionOfStuffOnCanvas = (collectionOfStuff, context) => {
    collectionOfStuff.forEach((stuff) => {
      stuff.draw(context);
    });
  };

  #putCanvasIntoSixteenByNineRatio = () => {
    this.toileTarget.width = 1024;
    this.toileTarget.height = 576;
  };

  createPlayer = (collisionBlocks, imageSrc, frameRate, animations) => {
    let nextPlayerName = this.nextPlayerNameIncrement === 0 ? 'player' : 'player'.this.nextPlayerNameIncrement;
    this[nextPlayerName] = new Player({
      collisionBlocks: collisionBlocks,
      imageSrc: imageSrc,
      frameRate: frameRate,
      animations: animations,
    });
    this.nextPlayerNameIncrement++;
  };
}
