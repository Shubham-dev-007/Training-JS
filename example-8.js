var obj = {
    naame:'shubham',
    age:26,
    salary:10000,
    'last-naame':'shrivastav',
    101:55
}

// console.log(obj['name']);
// for-in (always used on object)
for(let index in obj){
    console.log(index,obj[index]);
}
