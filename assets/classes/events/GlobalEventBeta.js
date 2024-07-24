import EventBeta from './EventBeta';

export default class GlobalEventBeta extends EventBeta {
  constructor({ game, eventName, keyboardCases }) {
    this.game = game;

    this.eventName = eventName;
    this.keyboardCases = keyboardCases;

    this.isCompleted = null;
    this.isFired = null;
  }

  fire() {}
}
