import {postData} from '../services/requests';
import changeModalState from './changeModalState';

const formDz = (state) => {
    const form = document.querySelectorAll('form'),
    // const sizeBlock = document.querySelector('[name = "size"]');
    calcPriceBlock = document.querySelector('.calc-price');
    
    form.forEach(element => {
        if ( element.getAttribute('data-dz') === 'dz'){
            element.addEventListener("submit", (e) => {
                e.preventDefault();
                // console.log(calcPriceBlock.innerHTML)
                const formData = new FormData();
                formData.append('Итоговая цена', calcPriceBlock.innerHTML);
                for (let key in state){
                    formData.append(key, state[key]);
               }

                     postData('assets/question.php', formData)
                        .then (data => console.log(data))
                        .catch(() => {
                            console.log('error')
                        })    
            })
        }
    });
}

export default formDz;