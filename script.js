"use strict"
// let a = +prompt ("Введите длину верхнего основания трапеции");
// let b = +prompt ("Введите длину нижнего основания трапеции");
// let h = +prompt ("Введите высоту трапеции");
// let result = ((a + b) / 2) * h;
// alert("Площадь трапеции = " + result );


// let a = 10;
// let b = 3;
// let result = a % b;
// alert(result);

// let x = 9;
// let message1 = " Значение Х равно 9";
// let a = x ** 2;
// let message2 = " Квадрат числа 9";
// alert(`x + message1 \n a + message2`);

// let dol = 5;
// let euro = 10;
// let rub = +prompt("Введите конвертируемую сумму в рублях");
// alert("Доллары: " + rub * dol + `\n` + "Евро: " + rub * euro)

// let x = 45;
// alert((x % 10) + " " + (x / 10));

// let n = prompt()
// alert( n - n % 10 + " " + n % 10 );

// let str = 'aaa bbb ccc';
// alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
// alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
// alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)

// for(let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let sum = +prompt("Введите сумму вклада");
// let procent = +prompt("Введите процент по вкладу");
// let cash = sum + (sum * procent / 100);
// alert(cash)

// let s1 = "Coding";
// let s2 = "in";
// let s3 = "c++";
// let s4 = "javaScript";
// s3 = s4;
// alert(s1 + " " + s2 + " " + s3);


// Расчет по вкладу

// let sum = +prompt("Введите сумму вклада");
// let procent = +prompt("Введите процент по вкладу");
// for (let year =0; year <= 5; year++) {
//     let cash = sum + (sum * procent * year);
//     if (year==1) {
//         alert("Через 1 год вклад: " + cash);
//     }
//     if (year==2) {
//         alert("Через 2 года вклад: " + cash);
//     }
//     if (year==3) {
//         alert("Через 3 года вклад: " + cash);
//     }
//     if (year==4) {
//         alert("Через 4 года вклад: " + cash);
//     }
//     if (year==5) {
//         alert("Через 5 лет вклад: " + cash);
//     }
// }

// for(let i = 1; i <= 10; i++) {
//   for(let j = 1; j <= 10; j++) {
//     alert(i +' x ' + j + " = " + i*j);
//   }
// }

let x = prompt("Введите целое положительное двузначное число:");
let first = x[0];
let second = x[1];
if(x>9){
    if(x<100){
    let x1 = parseFloat(x);
    if(Number.isInteger(x1)){
        alert((first*10) +" "+ second)
    }else{alert("Вы ввели неподходящее число")
    }
    }else{alert("Вы ввели неподходящее число")
    }
    }else{alert("Вы ввели неподходящее число")
    }


