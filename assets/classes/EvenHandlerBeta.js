export default class EventHandlerBeta {
  globalEvents;

  localEvents;

  keys = {
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

  constructor({ game, globalEvents }) {
    this.game = game;

    this.globalEvents = globalEvents;
    // this.doors = doors;

    this.preventEvents = false;
  }

  fireKeyBoardEventListeners = () => {
    window.addEventListener('keydown', (event) => {
      if (this.preventEvents) return;
      switch (event.key) {
        case 'ArrowUp':
          this.globalEvents.forEach((event) => {
            event.keyboardCases.forEach((keyboardCase) => {
              if (keyboardCase.name === 'ArrowUp') {
                keyboardCase.fire(this);
              }
            });
          });
          break;

        case 'ArrowRight':
          this.globalEvents.forEach((event) => {
            event.keyboardCases.forEach((keyboardCase) => {
              if (keyboardCase.name === 'ArrowRight') {
                keyboardCase.fire(this);
              }
            });
          });
          break;

        case 'ArrowLeft':
          this.globalEvents.forEach((event) => {
            event.keyboardCases.forEach((keyboardCase) => {
              if (keyboardCase.name === 'ArrowLeft') {
                keyboardCase.fire(this);
              }
            });
          });
          break;

        default:
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          this.keys.ArrowRight.pressed = false;
          break;

        case 'ArrowLeft':
          this.keys.ArrowLeft.pressed = false;

          break;

        default:
          break;
      }
    });
  };

  preventEventsToFire() {
    this.preventEvents = true;
  }
}
