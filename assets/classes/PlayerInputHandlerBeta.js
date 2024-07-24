export default class PlayerInputHandlerBeta {
  constructor({ game }) {
    this.game = game;
  }

  handleInput() {
    if (this.game.eventHandler.preventEvents) return;
    if (this.game.eventHandler.keys.ArrowRight.pressed) {
      this.game.player.switchSprite('runRight');
      this.game.player.velocity.x += this.game.player.originalVelocity.x;
      this.game.player.lastDirection = 'right';
    } else if (this.game.eventHandler.keys.ArrowLeft.pressed) {
      this.game.player.switchSprite('runLeft');
      this.game.player.velocity.x -= this.game.player.originalVelocity.x;
      this.game.player.lastDirection = 'left';
    } else {
      if (this.game.player.lastDirection === 'left') {
        this.game.player.switchSprite('idleLeft');
      } else {
        this.game.player.switchSprite('idleRight');
      }
    }
  }
}
