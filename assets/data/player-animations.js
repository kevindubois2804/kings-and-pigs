const playerAnimations = {
  idleRight: {
    frameRate: 11,
    frameBuffer: 2,
    loop: true,
    imageSrc: '../images/king/idle.png',
  },
  idleLeft: {
    frameRate: 11,
    frameBuffer: 2,
    loop: true,
    imageSrc: '../images/king/idleLeft.png',
  },
  runLeft: {
    frameRate: 8,
    frameBuffer: 4,
    loop: true,
    imageSrc: '../images/king/runLeft.png',
  },
  runRight: {
    frameRate: 8,
    frameBuffer: 4,
    loop: true,
    imageSrc: '../images/king/runRight.png',
  },
  enterDoor: {
    frameRate: 8,
    frameBuffer: 4,
    loop: false,
    imageSrc: '../images/king/enterDoor.png',
    onComplete: () => {
      console.log('fini');
    },
  },
};

export { playerAnimations };
