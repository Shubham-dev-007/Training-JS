function demo(x,y,...params){
    console.log(x);
    console.log(y);
    console.log(params);
}

var arr1 = ['ram','arjun','shubham']
var arr2 = [1,2,3,4,5]
var copy = [...arr1,...arr2];
arr1 = ['ram','arjun','shubham']
console.log(copy);
// demo(5,6,7,arr,true);


