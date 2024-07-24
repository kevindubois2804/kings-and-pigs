const biome1Level1Events = [
  {
    name: 'isaacChargerEnemyCollidingWithStuff',
    enemyCollisionCases: [
      {
        name: 'IsaacChargerCollidingWithSmallBox',
        fire: (context) => {
          if (context.game.biome.currentLevel.levelEnemies[0].hitbox.position.x - 0.02 <= context.game.biome.currentLevel.levelEnvironmentalCollisionBlocks[19].position.x + context.game.biome.currentLevel.levelEnvironmentalCollisionBlocks[19].width) {
            context.game.biome.currentLevel.levelEnemies = context.game.biome.currentLevel.levelEnemies.filter((enemy) => {
              return enemy.enemyId !== 1;
            });
            context.game.eventHandler.levelEvents = context.game.eventHandler.levelEvents.filter((event) => event.name !== 'isaacChargerEnemyCollidingWithStuff');
          }
        },
      },
    ],
  },
];

export { biome1Level1Events };
