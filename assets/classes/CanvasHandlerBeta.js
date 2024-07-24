export default class CanvasHandlerBeta {
  constructor({ game }) {
    this.game = game;

    this.overlay = {
      opacity: 0,
    };
  }

  fadeCanvas = (context) => {
    context.save();

    context.globalAlpha = this.overlay.opacity;

    context.fillStyle = 'black';
    context.fillRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);

    context.restore();
  };

  putCanvasIntoSixteenByNineRatio = (canvasTarget) => {
    canvasTarget.width = 1024;
    canvasTarget.height = 576;
  };
}
