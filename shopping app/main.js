const ul = document.querySelector('.ul');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    const li = document.createElement('li');
    const input_value = document.querySelector('#item_text_area').value;
    const target = event.target;

    const close_btn = document.createElement('i');
    close_btn.setAttribute('class','fas fa-trash-alt closebtn');
    // close_btn.addEventListener('click', ()=>{
    //     li.remove();
    // })
    ul.addEventListener('click', () =>{
        if(event.target === close_btn){
            li.remove();
        }
    })

    if(input_value === ''){
        return;
    }
    li.textContent = input_value;
    ul.appendChild(li);
    li.appendChild(close_btn);
    document.querySelector('#item_text_area').value = '';
    document.querySelector('#item_text_area').focus();
    li.scrollIntoView({block:"center"});
})




