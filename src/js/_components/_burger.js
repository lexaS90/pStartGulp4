

module.exports = function(el, option){
    var th = this;

    this.open = function(){
        el.classList.add('is-active');
    }
    this.close = function(){
        el.classList.remove('is-active');
    }
    this.toggle = function(){
        el.classList.toggle('is-active');
    }    

    el.addEventListener('click', function(){
        th.toggle();
        if ('onToggle' in option){
            option.onToggle.apply(th);
        }
            
    });
}
