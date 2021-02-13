const dropLittle = () => {
    let input = document.getElementById('upl');
    
    input.addEventListener('drop', (e) => {doFetch(e)});




   
        const postData = async (url, data) =>{
            let res = await fetch(url, {
                method: 'POST',
                body: data
            });
        
            return await res.text();
        };

        function doFetch (event){
            event.preventDefault();
            event.stopPropagation();
            input.files = event.dataTransfer.files;

            console.log(input.files[0])

            const formData1 = new FormData();
            formData1.append('file', input.files[0])

            postData('assets/question.php', formData1)
                .then(res => {
                    console.log(res); 
                    console.log('54') 
                })
                .catch(() => {
                   console.log('error')
                })
        }


    

};

export default dropLittle;