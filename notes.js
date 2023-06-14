// arr_1
// (2) ['ghanshyam', 'shyam']0: "ghanshyam"1: "shyam"length: 2[[Prototype]]: Array(0)
// copy_name
// [Array(2)]0: (2) ['ghanshyam', 'shyam']0: "ghanshyam"1: "shyam"length: 2[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
// typeof(arr_1)
// 'object'
// copy_name[0][1]
// 'shyam'
// arr_1
// (2) ['ghanshyam', 'shyam']
// var spread_arr = [...arr_1]
// undefined
// spread_arr 
// (2) ['ghanshyam', 'shyam']0: "ghanshyam"1: "shyam"length: 2[[Prototype]]: Array(0)
// spread_arr[1] 
// 'shyam'
// arr_1[0] = 'shubham'
// 'shubham'
// arr_1
// (2) ['shubham', 'shyam']
// spread_arr
// (2) ['ghanshyam', 'shyam']

// var obj = {
//     'name':'shubham',
//     'age':26,
//     'salary':10000
// }
// // for(variable_name of object_name){
//     const iterable = [10, 20, 30];
// // }
// for(var value of iterable){
//     console.log(value);
// }


// var q = undefined; //intializes with a value as undefined
// // undefined
// q= 10; // re-intialisation with value 10
// q=100; //re-intialisation with value 100

// var i = 100;
// console.log('outside block...',i);
// if(10>2){
    // console.log('inside block before declaration..',i);
    // var i = 200;
    // console.log('inside block after declaration..',i);
// }
// var i = 300;
// console.log('outside block...',i);
// var i; //declare a variable with ubdefined
// console.log('inside block before declaration..',i);
// var i = 200; // here you are declariang a vaiable with initializing value as 200
// console.log('inside block after declaration..',i);

// var a; // declaration
// var a = 10; //declaration with initialization
// a = 200 // re-intiliazation
// add(2,3)

// var adder = undefined;
// console.log(adder)

// console.log(x);
let x = 10; // declaration and initialisation happens together
console.log();

    if(10>2){
        // var x = undefined //here it is declared and initialised as undeifed
        // let x;
       console.log(x); // reference error
       x =  200;
       console.log(x);
        // console.log('value of if-x before initialisation',x);
        // x = 200; // declaration and initialisation happens together
        // console.log('value of if-x after initialisation',x); 
    }

x = 50 // re-initialisation

function demo(){
    console.log(x);
}

demo()


// const constantarr = [1,2,3,4,5]
// undefined
// constantarr.push(500)
// 6
// constantarr 
// (6) [1, 2, 3, 4, 5, 500]0: 11: 22: 33: 44: 55: 500length: 6[[Prototype]]: Array(0)
// constantarr.pop(500)
// 500













