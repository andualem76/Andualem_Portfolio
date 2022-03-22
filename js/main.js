$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav_bar').addClass("sticky")
        }else{
            $('.nav_bar').removeClass("sticky")
            }
});
//toggle menu
$('.menu_btn').click(function(){
    $('.nav_bar .menu').toggleClass("active")
    $('.menu_btn i').toggleClass("active")
});
});