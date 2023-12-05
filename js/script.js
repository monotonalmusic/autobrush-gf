let subItems = document.querySelectorAll('.sub-item');

subItems.forEach(function (item) {
    item.addEventListener('click', function () {   
        item.classList.toggle('green-bg');
    });

});