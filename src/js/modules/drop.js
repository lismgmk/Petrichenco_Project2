const drop = () => {

    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект упал в dropArea

    let inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventItem) => {
        inputs.forEach(input => {
            input.addEventListener(eventItem, (e) => {preventDef(e)}, false)
            console.log(1);
        } );
    } );

    function preventDef (item) {
        item.preventDefault();
        item.stopPropagation();
    };

    function showDrag (item){
        item.closest('.file_upload').style.border = '5px solid #000';
        item.closest('.file_upload').style.backgroundColor = 'red';
    };
    function unShowDrag (item){
        if(item.closest('.calc_form')){
            item.closest('.file_upload').style.border = 'none';
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.border = 'none';
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    };

    ['dragenter', 'dragover'].forEach((eventItem) => {
        inputs.forEach(input => {
            input.addEventListener(eventItem, () => {showDrag(input)}, false)
        })
    });
    ['dragleave', 'drop'].forEach((eventItem) => {
        inputs.forEach(input => {
            input.addEventListener(eventItem, () => {unShowDrag(input)}, false);           
        })
    });
    ['drop'].forEach((eventItem) => {
        inputs.forEach(input => {
            input.addEventListener(eventItem, (e) => {
            
                input.files = e.dataTransfer.files;

                let dots
            const arr = input.files[0].name.split('.');
            
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name =  arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
            }, false);           
        })
    });




};

export default drop;