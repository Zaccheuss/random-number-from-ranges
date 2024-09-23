export type NumberRange = [number, number];

const RANGE_OPPOSITE_ERROR_MESSAGE = (badTuple: NumberRange) =>
  `Number range is not correct. The minimum number must be the first element of the tuple and the maximum number must be the second element of the tuple.\nExpected [${badTuple[1]}, ${badTuple[0]}] but received [${badTuple[0]}, ${badTuple[1]}]`;

const OVERLAPPING_RANGES_ERROR_MESSAGE = (badTuples: NumberRange[]) =>
  `Number ranges cannot overlap. The following ranges overlap: [${badTuples[0][0]}, ${badTuples[0][1]}] and [${badTuples[1][0]}, ${badTuples[1][1]}]`;

export const randomFromRanges = (ranges: NumberRange[]): number => {
  let total = 0;
  ranges.forEach((range, i) => {
    if (range[0] >= range[1]) {
      throw new Error(RANGE_OPPOSITE_ERROR_MESSAGE(range));
    }
    if (i > 0) {
      if (range[0] < ranges[i - 1][1]) {
        throw new Error(
          OVERLAPPING_RANGES_ERROR_MESSAGE([ranges[i - 1], ranges[i]])
        );
      }
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

  return randomNumber;
};
