export default class CanvasEventListeners {
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

  constructor(playerInstance) {
    this.player = playerInstance;
  }

  fireKeyBoardEventListeners = () => {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
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
      console.log(event);
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
}
