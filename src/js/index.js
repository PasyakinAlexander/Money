$(document).ready(Core);

function Core()
{
    SetTabSwitcher();
    SetModal();
    InitOwlCarousel();
    SetTabSwitcherGames();
}

function InitOwlCarousel()
{
    var carousel_history = $(".carousel-history").owlCarousel(
        {
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
        }
    );

    var carousel_offers = $(".carousel-offers").owlCarousel(
        {
            items: 3,
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1000
        }
    );

    var carousel_offers = $(".carousel-images").owlCarousel(
        {
            items: 4,
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1000
        }
    );

    $('.btn-next.btn-carousel-history').click(function() {
        carousel_history.trigger('next.owl.carousel');
    });
    $('.btn-prev.btn-carousel-history').click(function() {
        carousel_history.trigger('prev.owl.carousel', [1000]);
    });
}

function SetTabSwitcher()
{
    $('.btn__tab__switch').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn__tab__switch').removeClass('active');
        $(this).addClass('active');

        let targetTab = $(this).attr('target');

        SwitchTab(targetTab)
    })
}

function SwitchTab(target)
{
    
    $('.tab.active').animate({
        opacity: 0
    }, 500, function() {
        $('.tab.active').removeClass('active');

        $(`[tab-name="${target}"]`).css('opacity', 0);
        $(`[tab-name="${target}"]`).addClass('active');
        
        let tabHeight = $(`[tab-name="${target}"]`)[0].clientHeight;
        $(`[tab-name="${target}"]`).closest('.tab__viewer').css('height', `${tabHeight}px`)

        $(`[tab-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    })
}

function SetTabSwitcherGames()
{
    $('.btn__tab__switch__games').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn__tab__switch__games').removeClass('active');
        $(this).addClass('active');

        let targetTab = $(this).attr('target');

        SwitchTabGames(targetTab)
    })
}

function SwitchTabGames(target)
{
    
    $('.tab-games.active').animate({
        opacity: 0
    }, 500, function() {
        $('.tab-games.active').removeClass('active');

        $(`[tab-name="${target}"]`).css('opacity', 0);
        $(`[tab-name="${target}"]`).addClass('active');
        
        let tabHeight = $(`[tab-name="${target}"]`)[0].clientHeight;
        $(`[tab-name="${target}"]`).closest('.tab__viewer__games').css('height', `${tabHeight}px`)

        $(`[tab-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    })
}

function SetModal()
{
    $('[modal]').on('click', function()
    {
        let modalId = $(this).attr('modal');
        ShowModal(`#${modalId}`);
    });

    $('.modal__dialog').on('click', function(e) {
        e.stopPropagation();
    });

    $('.modal').on('click', function() {
        HideModal(`#${$(this).attr('id')}`);
    });

    $('.btn__modal__close').on('click', function ()
    {
        let modalId = $(this).closest('.modal').attr('id');
        HideModal(`#${modalId}`);
    });
}

function ShowModal(modalId)
{
    $(modalId + ' .modal__dialog').off('animationend');
    $(modalId).addClass('active');
    $('body').addClass('lock');
    $(modalId + ' .modal__dialog').addClass('fadeInDownBig')
    
    $('body').append('<div class="modal__backdrop"></div>');
    setTimeout(function() {
        $('.modal__backdrop').addClass('active');
    }, 50)
}

function HideModal(modalId)
{
    $(modalId + ' .modal__dialog').removeClass('fadeInDownBig');
    $(modalId + ' .modal__dialog').addClass('fadeOutDownBig');
    $('.modal__backdrop').removeClass('active');
    $('body').removeClass('lock');
    $(modalId + ' .modal__dialog').on('animationend', function() {
        if (!$(modalId).hasClass('active'))
        {
            return;
        }
        $(modalId).removeClass('active');
        $(modalId + ' .modal__dialog').removeClass('fadeOutDownBig');
        $('.modal__backdrop').remove();
    });
}