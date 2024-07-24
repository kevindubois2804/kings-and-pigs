const globalEvents = [
  {
    name: 'playerMoving',
    keyboardCases: [
      {
        name: 'ArrowUp',
        fire: (context) => {
          if (context.game.player.velocity.y === 0) {
            context.game.player.velocity.y = -20;
          }
        },
      },
      {
        name: 'ArrowRight',
        fire: (context) => {
          context.keys.ArrowRight.pressed = true;
        },
      },
      {
        name: 'ArrowLeft',
        fire: (context) => {
          context.keys.ArrowLeft.pressed = true;
        },
      },
    ],
  },
  {
    name: 'playerInteractingWithDoors',
    keyboardCases: [
      {
        name: 'ArrowUp',
        fire: (context) => {
          for (let i = 0; i < context.game.biome.currentLevel.levelDoors.length; i++) {
            const door = context.game.biome.currentLevel.levelDoors[i];

            if (context.game.player.hitbox.position.x + context.game.player.hitbox.width <= door.position.x + door.width && context.game.player.hitbox.position.x >= door.position.x && context.game.player.hitbox.position.y + context.game.player.hitbox.height >= door.position.y && context.game.player.hitbox.position.y <= door.position.y + door.height) {
              context.game.player.velocity.x = 0;
              context.game.player.velocity.y = 0;
              context.game.eventHandler.preventEvents = true;
              context.game.player.switchSprite('enterDoor');
              door.playOnce();
              context.game.currentState = 'PAUSED';
              context.game.utils.gsap.to(context.game.canvasHandler.overlay, {
                opacity: 1,
                duration: 1,
              });
              context.game.canvasHandler.fadeCanvas();

              const newLevel = context.game.biome.biomeLevels.find((element) => {
                return door.idLevelAssociated === element.idLevel;
              });

              context.game.biome.currentLevel = newLevel;
              context.game.biome.currentLevel.init();
              context.game.utils.gsap.to(context.game.canvasHandler.overlay, {
                opacity: 0,
                duration: 1,
              });
              context.game.canvasHandler.fadeCanvas();
              context.game.currentState = 'RUNNING';
              context.game.eventHandler.preventEvents = false;
              return;
            }
          }
        },
      },
    ],
  },
];

export { globalEvents };
