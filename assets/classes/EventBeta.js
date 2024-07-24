export default class EventBeta {
  constructor({ game }) {
    this.game = game;
    this.isCompleted = null;
    this.isFired = null;
    this.eventType = '';
    this.cases = {};
    // this.doors = doors;
  }

  fire() {}
}
