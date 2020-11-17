"use strict";

let firstInput = document.querySelector('.task1-input');
console.log(firstInput);
let result = document.querySelector('.input-result');
console.log(result);
let box = document.querySelector('.box');
console.log(box);
let box2 = document.querySelector('.box2');
console.log(box2);
let colorInput = document.querySelector('.color');
console.log(colorInput);
let btnColor = document.querySelector('.change-color');
console.log(btnColor);
let btnResult = document.querySelector('.btn-result');
console.log(btnResult);
let color = '';
let leftFruit = document.querySelector('.left-fruit');
console.log(leftFruit);
let rightFruit = document.querySelector('.right-fruit');
console.log(rightFruit);
let btnImg = document.querySelector('.btn-img');
console.log(btnImg);
let btnBox = document.querySelector('.btn-box');
console.log(btnBox);

function getResult() {
    result.innerHTML = firstInput.value;
}
function getColor(){
   color = colorInput.value;
return color;
}
function changeFruit(){
    rightFruit.src = leftFruit.src;
}

btnColor.addEventListener('click', function () {
    box.style.backgroundColor = getColor();
});

btnResult.addEventListener('click', function(){
    getResult();
});

btnImg.addEventListener('click', function(){
    changeFruit();
});

btnBox.addEventListener('click', function(){
    box2.classList.toggle('d-none');
});
