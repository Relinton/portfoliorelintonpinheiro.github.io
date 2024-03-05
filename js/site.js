$(document).ready(function () {
    // Toggle da classe 'active' ao menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Scroll da página
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Botão de scroll para o topo
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // Animação de texto com Typed.js
    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor C#", "Desenvolvedor .Net Core", "Músico amador :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor C#", "Desenvolvedor .Net Core", "Músico amador :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Scroll suave ao clicar nos links do menu
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
