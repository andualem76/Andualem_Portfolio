const collapsibles = document.querySelectorAll(".menu_btn");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    
 
      var element = document.getElementById("myDIV");
      element.classList.toggle("active");

  })
);

const dismiss = document.querySelectorAll(".dismiss");
dismiss.forEach((item) =>
  item.addEventListener("click", function () {
      
 
      var element = document.getElementById("myDIV");
      element.classList.remove("active");

  })
);


  const event11 = window.addEventListener('scroll', function(e) {
    if(this.scrollY < 200) {
        var element = document.getElementById("navv");
        element.classList.remove("sticky");
    } else {
        var element = document.getElementById("navv");
        element.classList.add("sticky");
    }
  });
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.nav_bar').addClass("sticky")
//         }else{
//             $('.nav_bar').removeClass("sticky")
//             }
// });
//toggle menu
// $('.menu_btn').click(function(){
//     $('.nav_bar .menu').toggleClass("active")
//     $('.menu_btn i').toggleClass("active")
// });
// $('.dismiss').click(function(){
//     $('.nav_bar .menu').toggleClass("active")
//     $('.menu_btn i').toggleClass("active")
// });

// });

// element = document.getElementById("myDIV");
// element.classList.toggle("mystyle");