let image = document.querySelector('#image1');

image.addEventListener('mouseover', function () {
    image.classList.add('bordure');
});

image.addEventListener('mouseout', function () {
    image.classList.remove('bordure');
});