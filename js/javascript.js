//this makes it so shit works wherever the js is added in the doc apparently.
//https://stackoverflow.com/questions/36909827/javascript-doesnt-load/36909864
$(document).ready(function(){
  //this makes it so smooth scrolling works.
  //adjust the number value to speed up or slow down scrolling
  //$('a').click(function(){
  //  $('html, body').animate({
  //    scrollTop: $( $(this).attr('href') ).offset().top
  //  }, 500);
  //  return false;
  //});
  //$(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });


  $(window).on('scroll', function(){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
      //skillbar stuff
      var skillsDiv = $('#skills');
      var winT = $(window).scrollTop(),
      winH = $(window).height(),
      skillsT = skillsDiv.offset().top;
      if(winT + winH  > skillsT){
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },2000);
        });
      }
    });
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

});


  //this makes the skill bar work
  //https://codepen.io/i-am-niall/pen/Kggyxy

  //Scroll to Top button stuff



// var element = document.getElementById("slide2");
//
// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

 // $(document).on('click', 'a[href^="#"]', function (event) {
 //     event.preventDefault();
 //
 //     $('html, body').animate({
 //         scrollTop: $($.attr(this, 'href')).offset().top
 //     }, 500);
 // });

/*    $(document).ready(function() {
        $('a[href*=#]').each(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname
          && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
             if ($target) {
               var targetOffset = $target.offset().top;

               $(this).click(function() {
                $("#nav li a").removeClass("active");
                $(this).addClass('active');
                          $('html, body').animate({scrollTop: targetOffset}, 1000);
                          return false;
                        });
                     }
                   }
                 });

               });
*/
// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
