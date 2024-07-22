import { Controller } from '@hotwired/stimulus';
import Player from '../classes/Player.js';
import Sprite from '../classes/Sprite.js';
import InputHandler from '../classes/InputHandler.js';
import '../data/collisions.js';
import { animationsImageSrcResolver, collisionBlockArrayPopulaterFromRawData, imageSrcResolver } from '../utils/kings-and-pigs-helpers-functions.js';
import { collisionsLevel1 } from '../data/collisions.js';
import { playerAnimations } from '../data/player-animations.js';
import { doorsLevel1 } from '../data/doors.js';
import { backgroundLevel1 } from '../data/backgrounds.js';
import gsap from 'gsap';

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

  static targets = ['canvas'];

  doors = [];

  overlay = {
    opacity: 0,
  };

  nextPlayerNameIncrement = 0;

  connect() {
    let context = this.canvasTarget.getContext('2d');
    this.#putCanvasIntoSixteenByNineRatio();
    this.backgroundLevelOneSprite = new Sprite(imageSrcResolver(backgroundLevel1, this.backgroundLevelOneSpriteValue));
    this.collisionsBlockLevel = collisionBlockArrayPopulaterFromRawData(collisionsLevel1);

    this.doors.push(new Sprite(imageSrcResolver(doorsLevel1, this.doorsLevelOneSpriteValue)));

    this.createPlayer(this.collisionsBlockLevel, this.playerIdleLeftSpriteValue, 11, animationsImageSrcResolver(playerAnimations, this.playerIdleLeftSpriteValue, this.playerIdleRightSpriteValue, this.playerRunLeftSpriteValue, this.playerRunRightSpriteValue, this.playerEnterDoorSpriteValue));

    this.inputHandler = new InputHandler(this.player, this.doors);

    this.inputHandler.fireKeyBoardEventListeners();

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

    this.inputHandler.handleInput();

    this.player.draw(context);

    this.player.updatePlayerAttributes(context);

    if (this.player.currentAnimation?.name === 'enterDoor' && this.player.currentAnimation.isActive === true) {
      gsap.to(this.overlay, {
        opacity: 1,
      });
      this.#fadeInCanvas(context);
    }
  };

  #drawCollectionOfStuffOnCanvas = (collectionOfStuff, context) => {
    collectionOfStuff.forEach((stuff) => {
      stuff.draw(context);
    });
  };

  #putCanvasIntoSixteenByNineRatio = () => {
    this.canvasTarget.width = 1024;
    this.canvasTarget.height = 576;
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

  #fadeInCanvas = (context) => {
    context.save();

    context.globalAlpha = this.overlay.opacity;

    context.fillStyle = 'black';
    context.fillRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);

    context.restore();
  };
}
