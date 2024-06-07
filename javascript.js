
var tombolMenu = $(".tombol-menu")
var menu = $("nav .menu ul")

const klikMenu = () => {
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle
    });
}
$(document).redy(function(){
    var width = $(window).width();
    if(width < 990){
    klikMenu();
   }
})

//chek lebar
$(window).resize(function(){
    var width = $(window). width();
    if(width > 989){
        menu.css("dispaly", "block")
    }else{
        menu.css("display", "none")
    }
    klikMenu();
});

//efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih")
        }else{
            $("nav").removeClass("putih")
        }
    })
});