const isaacCharger2Data = {
  enemyType: 'IsaacChargerEnemyBeta',
  environmentalCollisionBlocksData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  imageSrc: 'resources/enemies/isaac-charger/idle.png',
  frameRate: 1,
  frameBuffer: 5,
  position: {
    x: 350,
    y: 200,
  },
  velocity: {
    x: 1,
    y: 0,
  },
  hitbox: {
    x: 4.5,
    y: 9,
    width: 23,
    height: 13,
  },
  animations: {
    idle: {
      frameRate: 1,
      frameBuffer: 2,
      loop: true,
      imageSrc: 'resources/enemies/isaac-charger/idle.png',
    },
    moveLeft: {
      frameRate: 4,
      frameBuffer: 5,
      loop: true,
      imageSrc: 'resources/enemies/isaac-charger/moveLeft.png',
    },
    moveRight: {
      frameRate: 4,
      frameBuffer: 5,
      loop: true,
      imageSrc: 'resources/enemies/isaac-charger/moveRight.png',
    },
  },
  loop: true,
  autoplay: true,
};

export { isaacCharger2Data };
