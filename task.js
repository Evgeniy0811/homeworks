// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = - Infinity;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] > max) {
        max = arr[i];
      };
      if (arr[i] < min) {
        min = arr[i];
      };
    };
    avg = (sum / arr.length).toFixed(2);
    avg = Number(avg);
    return { min: min, max: max, avg: avg };
  }
  
  // Задание 2
  function worker(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function makeWork(arrOfArr, func) {
    let max = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {  
      let f = func(arrOfArr[i]);
      if ( f > max) {
        max = f;
      }
    }  
    return max;
  }
  
  // Задание 3
  function worker2(arr) {
    let min = Infinity;
    let max = - Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return Math.abs(max - min);
  }