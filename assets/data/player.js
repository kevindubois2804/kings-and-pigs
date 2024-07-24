const playerData = {
  imageSrc: 'resources/player/idle.png',
  frameRate: 11,
  position: {
    x: 200,
    y: 200,
  },
  velocity: {
    x: 5,
    y: 0,
  },
  hitbox: {
    x: 58,
    y: 34,
    width: 50,
    height: 53,
  },
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: 'resources/player/idle.png',
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: 'resources/player/idleLeft.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: 'resources/player/runLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: 'resources/player/runRight.png',
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: 'resources/player/enterDoor.png',
      onComplete: (argument) => {
        argument.gsap.to(argument.overlay, {
          opacity: 1,
        });
        // const args = 'argument';
        // const body = 'argument.gsap.to(argument.overlay, ' + curlyBraceLeft + 'opacity: 1,' + curlyBraceRight + ');';
        // console.log(new Function(args, body));
        // new Function(args, body)();
      },
    },
  },
  loop: true,
};

export { playerData };
