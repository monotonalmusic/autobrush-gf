let brushPic1 = document.querySelector('#sub-brush-pic-1');
let brushPic2 = document.querySelector('#sub-brush-pic-2');
let brushPic3 = document.querySelector('#sub-brush-pic-3');

let subItems = document.querySelectorAll('.sub-item');

let subAddButton = document.querySelectorAll('.sub-add-button');

subAddButton.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains('green-bg')) {
            item.classList.toggle('green-bg');
            return;
        } else {
            alert('Item added to cart!'); 
            item.classList.toggle('green-bg');
        }
    });
});

let brushArray = [
    '/images/BlackBrush.png',
    '/images/BurntOrangeBrush.png',
    '/images/greenbrush.png',
    '/images/PurpleBrush.png',
    '/images/RedBlackBrush.png'
];

let dropdown1Text = document.querySelector('#dropdown1-text');
let dropdown1Items = document.querySelectorAll('.dropdown1-item');

dropdown1Items.forEach(function (item, index) {
    item.addEventListener('click', function () {
        dropdown1Text.innerHTML = item.innerHTML;
        brushPic1.setAttribute('src', brushArray[index]);
    });
})

let dropdown2Text = document.querySelector('#dropdown2-text');
let dropdown2Items = document.querySelectorAll('.dropdown2-item');

dropdown2Items.forEach(function (item, index) {
    item.addEventListener('click', function () {
        dropdown2Text.innerHTML = item.innerHTML;
        brushPic2.setAttribute('src', brushArray[index]);
    });
});

function checkout () {
    alert('Redirecting to payment page...');
}

