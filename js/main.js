//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>
// TASK #1
// Выберите при помощи селекторов DOM
// — все HTML-элементы strong и окрасьте их в зеленый цвет

// let tags = document.getElementsByTagName('strong');
// for(let t of tags){
//     t.style.color = 'green';
// }


// TASK #2
// — найдите все HTML-элементы em и добавьте им класс .selected

// let elements = document.querySelectorAll('em');
// for (let em of elements){
//     em.classList.add('selected')
// }
// console.log(elements)


// TASK #3
// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

// let marks = document.getElementsByClassName('row')[0];
// let row = marks.getElementsByTagName('mark')
// for(let r of row){
//     r.classList.add('selected')
// }


// TASK #4
// — Найдите все гиперссылки и удалите у них подчеркивания

// let elements  = document.getElementsByTagName('a')
// for(let el of elements){
//     el.style.textDecoration = 'none'
// }

// TASK #5
// — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в
// элементе с классом .container

// let elements = [...document.querySelectorAll(".container")].filter(e => e.textContent.search(/задания/i) > -1);
// console.log(elements)


// TASK #6
// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.

// let elements = document.getElementsByTagName('strong')
// for(let el of elements){
//     el.classList.toggle('some')
// }


// TASK #7
// — среди набора элементов с классом .row удалите класс у второго элемента

// let elements = document.getElementsByClassName('.row')[1];
// elements.classList.remove('row')


// TASK #8
// — прочитайте CSS-свойство color у второй гиперсылки в тексте

// let style = document.getElementsByTagName('a')[1];
// let elements = getComputedStyle(style)
// console.log(elements.color)
