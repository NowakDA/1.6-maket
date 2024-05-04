

// СВАЙПЕР

let swiper = null;
function initSwiper() {
    
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '#swiper-pagination',
            clickable: true,
        },
    });
}
function destroySwiper() {
    if (swiper !== null) {
        swiper.destroy();
        swiper = null;
    }
}
function checkScreenWidth() {
    if (window.innerWidth < 768) {
        destroySwiper();
        initSwiper();
    } else {
        destroySwiper(true, true);
    }
}

checkScreenWidth();
// Добавление обработчика события на изменение размера окна
window.addEventListener('resize', function() {
    checkScreenWidth();
});


// КНОПКА ПОКАЗАТЬ ВСЕ

let button = document.querySelector('.brands-list__show-more');
let brend_list =  document.querySelector('.brands-list__wrapper');
let button_text = document.querySelector('.brands-list__show-more > span');
let hidden = brend_list.querySelectorAll('#hidden');


button.addEventListener('click', function () {
    hidden.forEach(element => {
        element.classList.toggle('brands-list__item--hidden');
      });
    button.classList.toggle('brands-list__show-more--rotate');
 	button_text.innerHTML = 
	(button_text.innerHTML === 'Скрыть')
	? button_text.innerHTML = 'Показать все' : button_text.innerHTML = 'Скрыть';
    
   
})



