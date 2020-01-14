// задача №1
// время выполнения зависит от количества элементов массива. линейная.
// Потратил 10 минут.

const array = [
  '1.5',
  '3',
  '6',
  '1.5'
]


const t0 = performance.now();
const getPercents = arr => {
  const sum = arr.reduce((calc, numb) => calc + +numb, 0);
  return arr.map(numb => (numb*100/sum).toFixed(3))
}
const t1 = performance.now();
console.log("Call to doWork took " + (t1 - t0) + " milliseconds.")


getPercents(array);
