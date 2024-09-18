type NumberRange = [number, number];
const RANGE_OPPOSITE_ERROR_MESSAGE = (badTuple: NumberRange) =>
  `Number range is not correct. The minimum number must be the first element of the tuple and the maximum number must be the second element of the tuple.\nExpected [${badTuple[1]}, ${badTuple[0]}] but received [${badTuple[0]}, ${badTuple[1]}]`;

const randomFromRanges = (ranges: NumberRange[]) => {
  let total = 0;
  ranges.forEach((range) => {
    if (range[0] >= range[1]) {
      throw RANGE_OPPOSITE_ERROR_MESSAGE(range);
    }
    total += range[1] - range[0] + 1;
  });

  let randomNumber = Math.floor(Math.random() * total);

  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];

    if (i > 0) {
      randomNumber += range[0] - ranges[i - 1][1] - 1;
    } else {
      randomNumber += range[0];
    }

    if (randomNumber <= range[1]) {
      return randomNumber;
    }
  }
};

for (let i = 0; i < 50; i++) {
  const num = randomFromRanges([
    [-4, 1],
    [17, 20],
    // [40, 51],
  ]);

  console.log(num);
}
