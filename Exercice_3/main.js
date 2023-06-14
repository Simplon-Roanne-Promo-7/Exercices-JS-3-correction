let colorSquares = document.querySelectorAll('.color');

let text = document.querySelector('#text p');

colorSquares.forEach(element => {

    element.addEventListener('click', () => {


        text.style.color = window.getComputedStyle(element).backgroundColor

    })

});