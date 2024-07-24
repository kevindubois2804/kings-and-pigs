import { Controller } from '@hotwired/stimulus';
import GameBeta from '../classes/GameBeta.js';

export default class extends Controller {
  static targets = ['canvas'];

  connect() {
    let context = this.canvasTarget.getContext('2d');
    this.canvasTarget.width = 1024;
    this.canvasTarget.height = 576;

    this.init(context);

    this.animate(context);
  }

  init(context) {
    this.game = new GameBeta({ context: context, canvasWidth: this.canvasTarget.width, canvasHeight: this.canvasTarget.height });

    this.game.eventHandler.fireKeyBoardEventListeners();

    this.game.biome.currentLevel.init();
  }

  animate = (context) => {
    context.clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);

    this.game.update(context);

    if (this.game.currentState === 'PAUSED') this.game.canvasHandler.fadeCanvas();

    if (this.game.biome.currentLevel.checkIfADoorHasBeenEntered()) this.game.canvasHandler.fadeCanvas();
    // this.game.draw(context);
    window.requestAnimationFrame(() => {
      this.animate(context);
    });
  };
}
