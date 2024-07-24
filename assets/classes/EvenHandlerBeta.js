export default class EventHandlerBeta {
  globalEvents = [];

  levelEvents = [];

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

  constructor({ game, globalEvents, levelEvents }) {
    this.game = game;
    this.preventEvents = false;

    globalEvents.map((globalevent) => {
      this.globalEvents.push(globalevent);
    });

    levelEvents.map((levelevent) => {
      this.levelEvents.push(levelevent);
    });
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

  allowEventsToFire() {
    this.preventEvents = false;
  }

  fireLevelEvents() {
    this.levelEvents.forEach((event) =>
      event.enemyCollisionCases.forEach((enemyCollisionCase) => {
        enemyCollisionCase.fire(this);
      })
    );
  }

  loadEvents() {}
}
