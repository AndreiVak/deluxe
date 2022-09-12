let accordions = document.querySelectorAll('.about-us__advice-item');

accordions.forEach(function (el){
    el.addEventListener('click', function () {
        accordions.forEach(function (item) {
            if (el != item || el.classList.contains('about-us__advice-item-open')) {
                item.classList.remove('about-us__advice-item-open');
            } else {
                item.classList.add('about-us__advice-item-open');
            }
        });
    });
});