var Slideout = require('Slideout');
var Burger = require('../_burger/_burger');

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
        'padding': 256,
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


    let selectors = document.querySelectorAll('.c-nav__item');

    for(let i = 0; i < selectors.length; i++){
        selectors[i].addEventListener('click', function(e) {
            let th = this;

            for(let y = 0; y < selectors.length; y++){
                if (selectors[y] != th){
                    selectors[y].classList.remove('c-nav__item--dropdown-active');
                }
            }

            this.classList.toggle('c-nav__item--dropdown-active');

        });
    }
	
}