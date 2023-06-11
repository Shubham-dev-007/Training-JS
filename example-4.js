var parent = document.querySelector('.parent');
var paras = document.querySelectorAll('p');
var fourthPara = paras[2]

// var thirdPara = document.createElement('p')
// // parent.appendChild(thirdPara);
// thirdPara.innerHTML = 'this is third paragraph';
// thirdPara.className = 'third'
// parent.insertBefore(thirdPara,fourthPara)

var newParaArr = [
    document.createElement('p'),
    document.createElement('p'),
    document.createElement('p')
];
newParaArr[0].className = 'new-para-one'
newParaArr[0].innerHTML = 'this is first-para'
newParaArr[1].className = 'new-para-one'
newParaArr[1].innerHTML = 'this is second-para'
newParaArr[2].className = 'new-para-one'
newParaArr[2].innerHTML = 'this is third-para'

for(var i =0;i<newParaArr.length;i++){
    parent.insertBefore(newParaArr[i],fourthPara)
}
