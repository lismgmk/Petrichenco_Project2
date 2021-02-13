const scrolling = (upSelector) => {

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });
    //raf

    let links = document.querySelectorAll("[href^='#']"),
        speed = 0.7;

    links.forEach(link => {
        link.addEventListener('click', function(event){
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop, //число пикселей до начала
                hash = this.hash, // часть адресной строки после #
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // то куда скролим координаты (берем через св-во ТОП)
                start = null;

            
            requestAnimationFrame(step);

            function step (time){
                // проверяем не запущена ли анимация requestAnimationFrame
                if (start === null ){
                    start = time;
                }

                let progress = time - start,
                    //r количество пикселей которые мы должны пролистать
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);
                    console.log(toBlock);
                    // console.log(time);
                    console.log(widthTop);
                    // console.log(speed);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        })
    }
        

    )

 
    //чистый JS

    // let element = document.documentElement,
    //     body = document.body;

    //     const calcScroll = () => {
    //         upElem.addEventListener('click', function(event){

    //             // 1) Количесво скролла которого мы отмотали
    //             let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //             console.log(scrollTop);
    //             //если у ссылки нет #
    //             // 2) this.hash текущая ссылка
    //             if (this.hash !== ''){
    //                 event.preventDefault();
    //                 // элемент к которому будем мотать
    //                 let hashElement = document.querySelector(this.hash),
    //                 //  сколько осталось домотать пикселей до элемента
    //                     hashElementTop = 0;

    //                 // через цикл найдем hashElementTop получим количество пикселе до полной домотки

    //                 while(hashElement.offsetParent){
    //                     hashElementTop += hashElement.offsetTop; //от текущей ссылки до верха
    //                     hashElement = hashElement.offsetParent; // то откуда мотаем встречается с родителем куда мотаем
    //                 }
    //                 console.log(this.hash);
    //                 //3) количесво пикселей от родительского элемента
    //                 hashElementTop = Math.round(hashElementTop);
                    
    //                 smoothScroll (scrollTop, hashElementTop, this.hash);

    //             }
                
    //         })
    //     };

    //     const smoothScroll = (from, to, hash) => {
    //         let timeInterval = 0.1,
    //             prevScrollTop,
    //             speed;

    //             //направление вверх или вниз
    //             if(to > from){
    //                 speed = 30
    //             } else {
    //                 speed = -30
    //             };

    //             let move = setInterval(function(){
    //                 let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //                 if (
    //                     prevScrollTop === scrollTop ||
    //                     (to > from && scrollTop >= to) ||
    //                     (to < from && scrollTop <= to)
    //                 ) {
    //                     clearInterval(move);
    //                     // очищае адресную строку когда долистается наверх
    //                     history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //                 } else{

    //                     body.scrollTop += speed;
    //                     element.scrollTop += speed;
    //                     prevScrollTop = scrollTop;
                        
    //                 }

    //             }, timeInterval)
    //     };

    //     calcScroll();

};

export default scrolling;