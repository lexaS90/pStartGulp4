let Drop = require('./_dropdown.js');

module.exports = function(){
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








    
    // let mainMenu = document.querySelector('#mainMenu');


    // mainMenu.addEventListener('click', function(e) {
    //     for(let i = 0; i < selectors.length; i++){
    //         selectors[i].addEventListener('click', function(e){
    //             e.preventDefault();
    //             console.log(e.target);
    //             for (let y = 0; y < selectors.length; y++){
    //                 if (selectors[y] != e.target)
    //                     selectors[y].classList.remove('c-dropdown--active');
    //             }

    //             //let drop = new Drop('.c-dropdown');

    //         });        
    //     }


    // });

    



    
    // let drop = new Drop('.c-dropdown', {
        
    //     // onBeforeToggle: function(currenElem){         
    //     //     let selectors = document.querySelectorAll('#mainMenu .c-nav__item');

    //     //     for(let i = 0; i < selectors.length; i++){
    //     //         if (selectors[i] != currenElem)
    //     //             selectors[i].classList.remove('c-dropdown--active');
    //     //     }
    //     // }

    // });
	
}