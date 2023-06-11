var demo = document.querySelectorAll('.demo');

for(var i=0; i<demo.length;i++){
    demo[i].addEventListener('click',togglecColor)
}

function togglecColor() {
    for(var i=0; i<demo.length;i++){
        if(demo[i] === this){
            demo[i].style.backgroundColor = 'green'
        }else{
            demo[i].style.backgroundColor = 'red'

        }
    }
}

