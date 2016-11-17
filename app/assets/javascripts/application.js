// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log("script loaded!!!")

$(document).on('turbolinks:load', function(){
   $('.switch').mouseenter(function(){
      $('img.screenshot', this).hide();
      $('.info', this).show()
      if ($('.lang', this).is(':hidden')){
        $('.lang').fadeIn('slow')
      } else {
        console.log('dont have')
      }
    });

   $('.switch').mouseleave(function(){
      $('img.screenshot').show();
      $('.info').hide();
      $('.lang').hide();
    });

    // $("#about").click(function(){
    //     console.log("this is working")
    //     $(this).animate({down: '250px'});
    // });

    //$("#about").animate({down: '250px'})



});
