
window.addEventListener('load', inItEvents);

function inItEvents() {
   var demo = document.querySelectorAll('.demo')
   for(var i=0; i<demo.length;i++){
        demo[i].addEventListener('click',changeColor)
}
    function changeColor(){
        this.style.backgroundColor = 'red'
    };
}



// var arr = ['shubham','rohit','dikshant','ram']
// for(var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }