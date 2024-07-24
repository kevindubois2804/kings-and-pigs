import EnvironmentalCollisionBlockBeta from '../classes/EnvironmentalCollisionBlockBeta.js';

const parsingArrayInto2DArray = (array) => {
  const rows = [];

  for (let i = 0; i < array.length; i += 16) {
    rows.push(array.slice(i, i + 16));
  }

  return rows;
};

const collisionBlockArrayPopulaterFromRawData = (array) => {
  const result = [];
  const parsedCollisions = parsingArrayInto2DArray(array);
  parsedCollisions.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 292 || symbol === 250) {
        result.push(
          new EnvironmentalCollisionBlockBeta({
            position: {
              x: x * 64,
              y: y * 64,
            },
            height: 64,
            width: 64,
          })
        );
      }
    });
  });

  return result;
};

const collisionStatement = ({ object1, object2 }) => {
  return object1.hitbox.position.x <= object2.position.x + object2.width && object1.hitbox.position.x + object1.hitbox.width >= object2.position.x && object1.hitbox.position.y + object1.hitbox.height >= object2.position.y && object1.hitbox.position.y <= object2.position.y + object2.height;
};

export { collisionBlockArrayPopulaterFromRawData, collisionStatement };
