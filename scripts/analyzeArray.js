function findAverage(arr) {
  let sum = arr.reduce((pre, curr) => pre + curr, 0);
  return sum / arr.length;
}

function findMin(arr) {
  let min = arr[0];
  arr.forEach((num) => {
    min = Math.min(min, num);
  });
  return min;
}

function findMax(arr) {
  let max = arr[0];
  arr.forEach((num) => {
    max = Math.max(max, num);
  });
  return max;
}

export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  let sum = arr[0];
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "contains non-numeric";
    }
    sum += arr[i];
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  }
  let length = arr.length;
  let result = {
    average: sum / length,
    min,
    max,
    length,
  };
  return result;
}
