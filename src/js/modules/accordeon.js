const accordeon = (trigger) => {
    let btn = document.querySelectorAll(trigger);

    btn.forEach(item => {
        item.addEventListener('click', function(){
            
            btn.forEach(b => {
                b.classList.remove('active-style');
                b.nextElementSibling.classList.remove('active');
                b.nextElementSibling.style.maxHeight = '0px';
            })
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active');



            if(this.classList.contains('active-style')){

                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }
        });
    });

    
    // block = document.querySelectorAll(blockContent);

    // block.forEach(item => {
    //     item.classList.add('animated', 'fadeInDown');
    // });

    // btn.forEach(item => {
    //     item.addEventListener ('click', function (){
    //         console.log(this);
    //         if(!(this.classList.contains('active'))){
    //             btn.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             })
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });


};

export default accordeon;