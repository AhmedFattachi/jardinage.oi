let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})


let select1 = document.querySelector('.down1');
let block1 = document.querySelector('nav')

    select1.addEventListener('click' , function(){
    block1.classList.toggle('block1')
})


let select2 = document.querySelector('.down2');
let block2 = document.querySelector('body')

    select2.addEventListener('click' , function(){
    body.classList.toggle('block2')
})


let select3 = document.querySelector('.down3');
let block3= document.querySelector('block3')

select3.addEventListener('click' , function(){
    body.classList.toggle('block3')
})


let select4 = document.querySelector('.down4');
let block4= document.querySelector('body')

select4.addEventListener('click' , function(){
    body.classList.toggle('block4')
})

let select5 = document.querySelector('.down5');
let block5= document.querySelector('body')

select5.addEventListener('click' , function(){
    body.classList.toggle('block5')
})

