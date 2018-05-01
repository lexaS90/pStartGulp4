var Slideout = require('Slideout');
var Burger = require('../c-burger/c-burger');

module.exports = function(){
        
    // Get and clone main menu
    var menu = document.getElementById('mainMenu');
    var mobileMenu = menu.cloneNode(true);
    mobileMenu.removeAttribute('id')
        
    // Remove and add class for mobile menu
    mobileMenu.classList.remove('c-nav--inline');
    mobileMenu.classList.add('c-nav--slideOut');

    // Add mobile menu in slideout panel
    var mobilePanel = document.getElementById('mobilePanel');
    mobilePanel.getElementsByClassName('mobilePanel__menu')[0].appendChild(mobileMenu);    

    
    // Run Slideout plugin
    var slideout = new Slideout({
        'panel': document.getElementById('mainContent'),
        'menu': document.getElementById('mobilePanel'),
        'padding': 230,
        'tolerance': 70,
        'side': 'right',
    });


    // Burger
    var burger = new Burger('menuBurger', {
        onToggle: function(){
            slideout.toggle();
        },
    });

    slideout.on('open', function(){
        burger.open();
    });

    slideout.on('close', function(){
        burger.close();
    });

    // Список dropdown меню
    var menuItems = document.querySelectorAll('.c-nav__item');

    // Клик не по пункту меню
    window.onclick = function(event) {
        if (!event.target.matches('.c-nav__link')) {
            
            
            for(var i = 0; i < menuItems.length; i++){
                 menuItems[i].classList.remove('c-nav__item--dropdown-active');
            }
        }
    }
    

    for(var i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener('click', function(e) {
            var th = this;

            // Если dropdown то отменяем переход

            if (e.target.parentNode.matches('.c-nav__item--dropdown')){
                e.preventDefault();
            }

            for(var y = 0; y < menuItems.length; y++){
                if (menuItems[y] != th){
                    menuItems[y].classList.remove('c-nav__item--dropdown-active');
                }
            }

            this.classList.toggle('c-nav__item--dropdown-active');

        });
    }
	
}