import { isaacChargerData } from '../../../enemies/isaac-charger.js';
import { isaacCharger2Data } from '../../../enemies/isaac-charger2.js';

const biomeOneLevelOneData = {
  levelId: 1,
  levelEnvironmentalCollisionBlocksData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  levelBackgroundData: {
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: 'resources/biomes/caves/level1/backgroundLevel1.png',
    frameRate: 2,
    frameBuffer: 50,
    loop: true,
  },
  enemiesData: [
    { enemyId: 1, ...isaacChargerData },
    { enemyId: 2, ...isaacCharger2Data },
  ],
  doorsData: [
    {
      spriteData: {
        position: {
          x: 767,
          y: 270,
        },
        imageSrc: 'resources/biomes/caves/level1/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false,
      },
      idData: {
        levelId: 2,
        doorId: 1,
      },
    },
  ],
};

export { biomeOneLevelOneData };
