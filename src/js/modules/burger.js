const burger = (menuSelector, burgerSelector) => {

    const burgerElem = document.querySelector(burgerSelector),
        menyElem = document.querySelector(menuSelector);

        menyElem.style.display = 'none';
        burgerElem.style.zIndex = 10;

        burgerElem.addEventListener('click', () => {
            if (menyElem.style.display == 'none' && window.screen.availWidth < 993){
                menyElem.style.display = 'block';

            } else {
                menyElem.style.display = 'none'
            }
        });

        window.addEventListener('resize', () => {
            if(window.screen.availWidth > 993){
                menyElem.style.display = 'none'
            }
        })

};

export default burger;