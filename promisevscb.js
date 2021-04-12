let fs = require('fs');
function promisewalafile(filepath) {
    return new Promise(function(resolve, reject){
        fs.readFile(filepath, function cb(err,data){
           if (err){
               reject(err);
           }else{
               resolve(data);
           }
        });
    });
}
let frp= promisewalafile("f1.txt");
console.log(frp);
setTimeout(function (){
    console.log(frp+"");
},1000);
console.log("after");