$('.slider__inner').slick({
  dots:true,
  arrows:false,
  autoplay:false
})

$('.burger').on('click', () => {
  $list = $('.nav__menu-item:not(.burger)');
  if($('.burger__menu:has(*)').length){
    $('.burger__menu-wrapper').toggleClass("burger__menu-wrapper_opened");
    return;
  }
  $list.each((index,el)=>{
    $clone = $(el).clone(true).removeClass('nav__menu-item').addClass('burger__menu-item');
    $('.burger__menu').append($clone);
  });
  $('.burger__menu-item .nav__menu-dropdown').each((index, el) => {
    $(el).removeClass('nav__menu-dropdown').addClass('burger__menu-dropdown');
  })

  $('.burger__menu-wrapper').toggleClass("burger__menu-wrapper_opened");
})
$('.burger__menu-close-btn').on('click', () => {
  $('.burger').trigger('click');
});