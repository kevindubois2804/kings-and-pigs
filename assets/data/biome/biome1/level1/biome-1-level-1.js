import { isaacChargerData } from '../../../enemies/isaac-charger.js';
import { isaacCharger2Data } from '../../../enemies/isaac-charger2.js';

const biomeOneLevelOneData = {
  idLevel: 1,
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
    {
      enemyId: 1,
      ...isaacChargerData,
      position: {
        x: 767,
        y: 200,
      },
    },
    {
      enemyId: 2,
      ...isaacCharger2Data,
      position: {
        x: 767,
        y: 200,
      },
    },
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
      rawData: {
        idLevelAssociated: 2,
      },
    },
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

export { biomeOneLevelOneData };
