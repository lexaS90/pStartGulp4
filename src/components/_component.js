module.exports = function(){

    // Burger
    let Burger = require('./_burger/_burger');
    new Burger('demoBurger');

    // Nav bar
    require('./_nav-bar/_nav-bar')();

}