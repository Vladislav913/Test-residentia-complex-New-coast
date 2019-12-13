$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $('.logo-active').toggleClass('logo-none');
  $('.menu-btn').toggleClass('act, menu-btn-act');
  $('logo-none').toggleClass('.header__box-filter');
})

