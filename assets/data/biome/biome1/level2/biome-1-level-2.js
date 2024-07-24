import { isaacChargerData } from '../../../enemies/isaac-charger.js';
import { isaacCharger2Data } from '../../../enemies/isaac-charger2.js';

const biomeOneLevelTwoData = {
  idLevel: 2,
  levelEnvironmentalCollisionBlocksData: [292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0],
  levelBackgroundData: {
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: 'resources/biomes/caves/level2/backgroundLevel2.png',
    frameRate: 1,
    frameBuffer: 50,
    loop: true,
  },
  enemiesData: [
    {
      enemyId: 1,
      ...isaacChargerData,
      position: {
        x: 667,
        y: 400,
      },
    },
    {
      enemyId: 2,
      ...isaacCharger2Data,
      position: {
        x: 667,
        y: 400,
      },
    },
  ],
  doorsData: [
    {
      spriteData: {
        position: {
          x: 772,
          y: 336,
        },
        imageSrc: 'resources/biomes/caves/level1/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false,
      },
      rawData: {
        idLevelAssociated: 3,
      },
    },
  ],
  playerPosition: {
    x: 200,
    y: 200,
  },
};

export { biomeOneLevelTwoData };
