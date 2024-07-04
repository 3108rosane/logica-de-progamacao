import leia from "readline-sync"
var minima = [];
var maxima = [];

for(var i = 0; i < 30; i++){
    var temp1 = parseInt(Math.random() *23) + 12
    var temp2 = parseInt(Math.random() *23) + 12

    if (temp1 < temp2) {
        minima.push(temp1);
        maxima.push(temp2);
        
    }else {
        maxima.push(temp1);
        minima.push(temp2);
    }
}

for (var i = 0; i < 30; i++) {
    console.log("dia" + (i+1) + ":maxima:" +maxima[i] + "minima:" + minima[i])
    
}