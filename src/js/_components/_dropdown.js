module.exports = function(el = '.c-dropdown', option){
    let th = this;

    let selectors = document.querySelectorAll(el);

    this.toggle = function(el){
        el.classList.toggle('c-dropdown--active');
    }

    for(let i = 0; i < selectors.length; i++){
        selectors[i].addEventListener('click', function(e){console.log('oo');
            e.preventDefault();

            if ('onBeforeToggle' in option){
                option.onBeforeToggle.call(th, this);
            }

            th.toggle(this);            
        });
    }

    
}