import CollisionBlock from '../classes/CollisionBlock.js';

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
      if (symbol === 292) {
        result.push(
          new CollisionBlock({
            position: {
              x: x * 64,
              y: y * 64,
            },
          })
        );
      }
    });
  });

  return result;
};

export { collisionBlockArrayPopulaterFromRawData };
