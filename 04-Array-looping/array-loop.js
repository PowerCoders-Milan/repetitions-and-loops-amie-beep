
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,'e',8];

var count_char = 0;
var count_num = 0;


for( var i = 0; i < array.length; i++){
if(typeof array[i] === "string"){
    count_char++;
    
}else if(typeof array[i] === "number"){
    count_num++;
   

  }
}

console.log("The letters are "+count_char);
console.log("The numbers are "+count_num);
