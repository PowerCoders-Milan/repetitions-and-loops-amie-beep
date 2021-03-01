// write your code below

console.log("Only with number")
for(var i = 0; i <= 10; i++){
    var num = 9;
    var res = i * num;
    console.log(i +" * " + num+ " = "+ res);
}
//function start
console.log("Function starts with differnt number")
function multiply(num){
    for(var i = 0; i <= 10; i++){
    var res = i * num;
    console.log(i +" * " + num+ " = "+ res);
    } 
}
multiply(8);
