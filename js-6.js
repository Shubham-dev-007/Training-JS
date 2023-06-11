var demo = document.querySelector('.demo')
demo.addEventListener('click',myFunction)
var key = true

function myFunction() {
    if(key){
        this.style.backgroundColor = 'green'
    }else{
        this.style.backgroundColor = 'red'
    }
    key = !key;
}