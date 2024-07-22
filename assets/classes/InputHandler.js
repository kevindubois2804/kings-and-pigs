export default class InputHandler {
  keysToListenTo = {
    ArrowUp: {
      pressed: false,
    },
    ArrowLeft: {
      pressed: false,
    },
    ArrowRight: {
      pressed: false,
    },
  };

  constructor(playerInstance, doors) {
    this.player = playerInstance;
    this.doors = doors;
  }

  fireKeyBoardEventListeners = () => {
    window.addEventListener('keydown', (event) => {
      if (this.player.preventInput) return;
      switch (event.key) {
        case 'ArrowUp':
          for (let i = 0; i < this.doors.length; i++) {
            const door = this.doors[i];
            if (this.player.hitbox.position.x + this.player.hitbox.width <= door.position.x + door.width && this.player.hitbox.position.x >= door.position.x && this.player.hitbox.position.y + this.player.hitbox.height >= door.position.y && this.player.hitbox.position.y <= door.position.y + door.height) {
              this.player.velocity.x = 0;
              this.player.velocity.y = 0;
              this.player.preventInput = true;
              this.player.switchSprite('enterDoor');
              door.play();
              return;
            }
          }
          if (this.player.velocity.y === 0) {
            this.player.velocity.y = -20;
          }
          break;
        case 'ArrowRight':
          this.keysToListenTo.ArrowRight.pressed = true;
          break;

        case 'ArrowLeft':
          this.keysToListenTo.ArrowLeft.pressed = true;
          break;

        default:
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          this.keysToListenTo.ArrowRight.pressed = false;
          break;

        case 'ArrowLeft':
          this.keysToListenTo.ArrowLeft.pressed = false;

          break;

        default:
          break;
      }
    });
  };

  handleInput() {
    if (this.player.preventInput) return;
    if (this.keysToListenTo.ArrowRight.pressed) {
      this.player.switchSprite('runRight');
      this.player.velocity.x = 5;
      this.player.lastDirection = 'right';
    } else if (this.keysToListenTo.ArrowLeft.pressed) {
      this.player.switchSprite('runLeft');
      this.player.velocity.x = -5;
      this.player.lastDirection = 'left';
    } else {
      if (this.player.lastDirection === 'left') {
        this.player.switchSprite('idleLeft');
      } else {
        this.player.switchSprite('idleRight');
      }
    }
  }
}
