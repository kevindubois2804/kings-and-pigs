import { Controller } from '@hotwired/stimulus';
import Player from '../classes/Player.js';
import CanvasEventListeners from '../classes/CanvasEventListeners.js';
import Sprite from '../classes/Sprite.js';
import '../data/collisions.js';
import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions.js';
import { collisionsLevel1 } from '../data/collisions.js';

export default class extends Controller {
  static values = {
    backgroundLevelOne: String,
  };

  static targets = ['toile'];

  nextPlayerNameIncrement = 0;

  connect() {
    let context = this.toileTarget.getContext('2d');
    this.#putCanvasIntoSixteenByNineRatio();
    this.backgroundLevel1 = new Sprite(
      {
        position: {
          x: 0,
          y: 0,
        },
      },
      this.backgroundLevelOneValue
    );
    this.collisionsBlockLevel = collisionBlockArrayPopulaterFromRawData(collisionsLevel1);
    this.#drawCanvas(context);
    this.createPlayer();

    this.canvasEventListeners = new CanvasEventListeners(this.player);
    this.canvasEventListeners.fireKeyBoardEventListeners();
    this.animate(context);
  }

  animate = (context) => {
    window.requestAnimationFrame(() => {
      this.animate(context);
    });

    this.backgroundLevel1.drawSprite(context);

    this.#drawCollisionBlocksOnCanvas(this.collisionsBlockLevel, context);

    this.player.velocity.x = 0;

    this.#changePlayerVelocityBasedOnKeyPressed();
    this.player.drawPlayer(context);
    this.player.updatePlayerAttributes(this.toileTarget);
  };

  #drawCanvas = (context) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, this.toileTarget.width, this.toileTarget.height);
  };

  #drawCollisionBlocksOnCanvas = (collisionBlocksArray, context) => {
    collisionBlocksArray.forEach((collisionBlock) => {
      collisionBlock.drawBlock(context);
    });
  };

  #putCanvasIntoSixteenByNineRatio = () => {
    this.toileTarget.width = 1024;
    this.toileTarget.height = 576;
  };

  // #clearCanvas = (context) => {
  //   context.fillStyle = 'white';
  //   context.fillRect(0, 0, this.toileTarget.width, this.toileTarget.height);
  // };

  createPlayer = () => {
    let nextPlayerName = this.nextPlayerNameIncrement === 0 ? 'player' : 'player'.this.nextPlayerNameIncrement;
    this[nextPlayerName] = new Player({
      collisionBlocks: this.collisionsBlockLevel,
    });
    this.nextPlayerNameIncrement++;
  };

  #changePlayerVelocityBasedOnKeyPressed = () => {
    if (this.canvasEventListeners.keysToListenTo.ArrowRight.pressed) {
      this.player.velocity.x = 5;
    } else if (this.canvasEventListeners.keysToListenTo.ArrowLeft.pressed) {
      this.player.velocity.x = -5;
    }
  };
}
