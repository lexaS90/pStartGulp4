

module.exports = function(el, option){
    var th = this;
    var option = option || {};
    var el = document.getElementById(el);

    this.open = function(){
        el.classList.add('is-active');
    }
    this.close = function(){
        el.classList.remove('is-active');
    }
    this.toggle = function(){
        el.classList.toggle('is-active');
    }    

    if (el){
        el.addEventListener('click', function(){
            th.toggle();
            if ('onToggle' in option){
                option.onToggle.apply(th);
            }
                
        });
    }    
}
