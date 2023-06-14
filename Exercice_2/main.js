let display = document.querySelector('#display');
let hide = document.querySelector('#hide');

let text = document.querySelector('#text p');

display.addEventListener('click', function () {
    text.style = 'display: block';
});

hide.addEventListener('click', function () {
    text.style = 'display: none';
});