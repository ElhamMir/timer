let results = []
let i = 0;
let j

// print process.argv
process.argv.forEach(function (val, index, array) {
    j = Number(val);
    if(i >= 2){
        results.push(j*1000)
    }
    i++
    console.log(index + ': ' + val);
  });

console.log(results)
//results.sort();
results.sort(function(a, b) {
    return a - b;
  });

console.log(results)
const spin = function(results){
for(const num of results){
   // j++;
     // time = i + (200 * j)
    setTimeout(() => {
        process.stdout.write('\x07');

      //process.stdout.write(num);
    }, num );
  }
}
spin(results)