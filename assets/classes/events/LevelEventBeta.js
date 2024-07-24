export default class LevelEventBeta extends EventBeta {
  constructor({ game, eventName, enemyCollisionCases }) {
    this.game = game;

    this.eventName = eventName;
    this.enemyCollisionCases = enemyCollisionCases;

    this.isCompleted = null;
    this.isFired = null;
  }

  fire() {}
}
