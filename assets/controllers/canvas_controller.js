import { Controller } from '@hotwired/stimulus';
import Player from '../classes/Player.js';

import GameBeta from '../classes/GameBeta.js';
import IsaacChargerEnemyBeta from '../classes/enemies/IsaacChargerEnemyBeta.js';
import { isaacChargerData } from '../data/enemies/isaac-charger.js';

export default class extends Controller {
  static targets = ['canvas'];

  doors = [];

  overlay = {
    opacity: 0,
  };

  connect() {
    let context = this.canvasTarget.getContext('2d');

    this.init(context);

    this.animate(context);

    // this.backgroundLevelOneSprite = new Sprite(backgroundLevel1);
    // this.collisionsBlockLevel = collisionBlockArrayPopulaterFromRawData(collisionsLevel1);
    // this.doors.push(new Sprite(doorsLevel1));
    // this.createPlayer({
    //   collisionBlocks: this.collisionsBlockLevel,
    //   imageSrc: 'resources/player/idle.png',
    //   frameRate: 11,
    //   animations: playerAnimations,
    //   overlay: this.overlay,
    //   gsap: gsap,
    // });
    // this.inputHandler = new InputHandler(this.player, this.doors);
    // this.inputHandler.fireKeyBoardEventListeners();
    // this.animate(context);
  }

  init(context) {
    this.#putCanvasIntoSixteenByNineRatio();

    this.game = new GameBeta({ context: context, width: this.canvasTarget.width, height: this.canvasTarget.height });

    this.game.inputHandler.fireKeyBoardEventListeners();

    this.game.addEnemy(new IsaacChargerEnemyBeta({ game: this.game, ...isaacChargerData }));

    console.log(this.game);
  }

  animate = (context) => {
    window.requestAnimationFrame(() => {
      this.animate(context);
    });
    context.clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);
    this.game.update();
    this.game.draw(context);

    // this.backgroundLevelOneSprite.draw(context);

    // this.#drawCollectionOfStuffOnCanvas(this.collisionsBlockLevel, context);
    // this.#drawCollectionOfStuffOnCanvas(this.doors, context);

    // this.player.velocity.x = 0;

    // this.inputHandler.handleInput();

    // this.player.draw(context);

    // this.player.updatePlayerAttributes(context);

    // context.save();

    // context.globalAlpha = this.overlay.opacity;

    // context.fillStyle = 'black';
    // context.fillRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);

    // context.restore();

    // if (this.player.currentAnimation?.name === 'enterDoor' && this.player.currentAnimation.isActive === true) {
    //   gsap.to(this.overlay, {
    //     opacity: 1,
    //   });
    //   this.#fadeInCanvas(context);
    // }
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

  createPlayer = ({ collisionBlocks, imageSrc, frameRate, animations, overlay, gsap }) => {
    let nextPlayerName = this.nextPlayerNameIncrement === 0 ? 'player' : 'player'.this.nextPlayerNameIncrement;
    this[nextPlayerName] = new Player({
      collisionBlocks: collisionBlocks,
      imageSrc: imageSrc,
      frameRate: frameRate,
      animations: animations,
      overlay: overlay,
      gsap: gsap,
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
