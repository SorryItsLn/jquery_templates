$(document).ready(function () {

    $(".next").click(function(){
        var currentImage = $('.img.curry');
        var curreentImageIndex = $('.img.curry').index()
        var nextImageIndex = curreentImageIndex + 1
        var nextImage  = $('.img').eq(nextImageIndex)
        currentImage.fadeOut(1000)
        currentImage.removeClass("curry")

        // Условие для показа циклически
        if (nextImageIndex == ($('.img:last').index()+1)) {
            $('.img').eq(0).fadeIn(1000)
            $('.img').eq(0).addClass("curry")

            
        } else{
            nextImage.fadeIn(1000)
            nextImage.addClass("curry")
        }

    });
    $(".prev").click(function(){
    var currentImage = $('.img.curry');
    var curreentImageIndex = $('.img.curry').index()
    var prevImageIndex = curreentImageIndex - 1
    var prevImage  = $('.img').eq(prevImageIndex)

    currentImage.fadeOut(1000)
    currentImage.removeClass("curry")
    prevImage.fadeIn(1000)
    prevImage.addClass("curry")
    });    
});