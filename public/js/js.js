$(document).ready(function(){
    $('.btn-menu').on('click', function(){
      toggleMenu($('.menus'));
    });
    $('.menus').before().on('click', function(){
      toggleMenu($('.menus'));
    });

    function toggleMenu(menu) {
      menu.toggleClass('active');
    }
});