export default class CanvasHandlerBeta {
  constructor({ game, context, canvasWidth, canvasHeight }) {
    this.game = game;

    this.overlay = {
      opacity: 0,
    };

    this.context = context;

    this.canvasWidth = canvasWidth;

    this.canvasHeight = canvasHeight;
  }

  fadeCanvas = (fadeIn = true) => {
    // const opacityValue = fadeIn ? 1 : 0;

    // this.game.utils.gsap.to(this.overlay, {
    //   opacity: opacityValue,
    // });

    this.context.save();

    this.context.globalAlpha = this.overlay.opacity;

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.context.restore();
  };

  putCanvasIntoSixteenByNineRatio = (canvasTarget) => {
    canvasTarget.width = 1024;
    canvasTarget.height = 576;
  };
}
