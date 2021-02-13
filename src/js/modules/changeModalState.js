const changeModalState = (state) => {

    const sizeBlock = document.querySelector('#size'),
        materialBlock = document.querySelector('#material'),
        optionBlock = document.querySelector('#options'),
        promocodeBlock = document.querySelector('.promocode'),
        calcPriceBlock = document.querySelector('.calc-price');

    function bindModals (elem, event, form) {
        console.log(elem);
        elem.addEventListener(event, (e) =>{
            switch (elem.nodeName) {
                        case 'SELECT':
                            state[form] = elem.value;
                        break;
                        default:
                            state[form] = elem.value;
                            break;
                    }
                    console.log(state)
        }); 
            
        
        
    };

    bindModals(sizeBlock, 'change', 'size');
    bindModals(materialBlock, 'change', 'material');
    bindModals(optionBlock, 'change', 'options');
    


};

export default changeModalState;