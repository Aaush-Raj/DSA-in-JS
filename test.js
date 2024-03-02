
const flag = true;
const testPromise = new Promise(function(resolve,reject){
    resolve("PROMISE RESOLVED!!!")
})

console.log(testPromise.then(testPromise))