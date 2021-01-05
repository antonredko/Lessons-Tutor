const frontDash = '---------- '
const backDash = ' ----------'

/* 1. Главные особенности обратных/косых кавычек (`...`) - это:
    - многострочность;
    - интерполяция - возможность вставлять в строку переменные, код js и т.д. */
console.log(frontDash, 1, backDash)

let title = 'JS Lesson 1: Base'

let a = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <script src="js/script.js"></script>
</body>
</html>`

console.log(a)


/* 2. Преобразовать в булево значение, 2 способа */
console.log(frontDash, 2, backDash)

console.log(Boolean('Hello!'))
console.log(!!'Hello!')


/* 3. Function Declaration (Объявление Функции) */
console.log(frontDash, 3, backDash)

sqrt(10, 3)

function sqrt(x = 0, y){
    console.log(x ** y)
}


/* 4. Function Expression (Функциональное Выражение) */
console.log(frontDash, 4, backDash)

// fff(10, 3)

let fff = function(x = 0, y){
    console.log(x ** y)
}


/* 5. result */
console.log(frontDash, 5, backDash)

let c = 5
let cb = 10
let result = func(sum(c, cb), 3);

function func(x, y){
    return x ** y
    // console.log(x ** y) - не выполнится после return
}
function sum(x, y){
    return x + y
    // console.log(x + y) - не выполнится после return
}

console.log('result', result)


/* 6. Функции-стрелки */
console.log(frontDash, 6, backDash)

let arrowFunc = x => x => xy => y

console.log(arrowFunc) // выведется все тело функции
console.log(arrowFunc()) // выведется все после первой '=>'