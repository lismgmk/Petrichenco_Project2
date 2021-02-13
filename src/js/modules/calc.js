import {postData} from '../services/requests'

const calc = (size, material, option, promocode, result)=>{
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionBlock = document.querySelector(option),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

        let sum = 0;

        function calcSum (){
            sum = Math.floor(+sizeBlock.value * +materialBlock.value + (+optionBlock.value));
            
            if (sizeBlock.value == '' || materialBlock.value == ''){
                resultBlock.innerHTML = 'Введите размер и материал';
            } else if (promocodeBlock.value === 'IWANTPOPART'){
                resultBlock.innerHTML = sum * 0.7;
            } else {
                resultBlock.innerHTML = sum
            }
        };

        sizeBlock.addEventListener('change', calcSum);
        materialBlock.addEventListener('change', calcSum);
        optionBlock.addEventListener('change', calcSum);
        promocodeBlock.addEventListener('input', calcSum);

};

export default calc;