import IsaacChargerEnemyBeta from '../classes/enemies/IsaacChargerEnemyBeta.js';

const classes = { IsaacChargerEnemyBeta };

export default function dynamicClass(name) {
  return classes[name];
}
