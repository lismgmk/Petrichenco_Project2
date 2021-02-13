import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapperSelector) =>{

    const  btn = document.querySelector(trigger),
            wrapper = document.querySelector(wrapperSelector);

    

    // moreStyles.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp')
    // });

    // btn.addEventListener('click', () =>{
    //     moreStyles.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

    //         btn.style.display = 'none';
    //         btn.remove();
    //     })
    // })

    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
	// 				<div class=styles-block>
	// 					<img src=assets/img/styles-8.jpg alt>
	// 					<h4>Шарж</h4>
	// 					<a href="#">Подробнее</a>
	// 				</div>
	// 			</div>

    btn.addEventListener('click', function(){
        getResource('assets/db.json')
            .then(res =>  createCards(res.styles))
            .catch(error => console.log(error));

        this.remove;
    });

    function createCards (response){
        response.forEach(({src, title, link}) => {
            
            let blockImg = document.createElement('div');
            blockImg.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            blockImg.innerHTML = 
            `<div class=styles-block>
                <img src='${src}' alt>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>`;

            wrapper.appendChild(blockImg);
        })
        
                   
    }
}

export default showMoreStyles;