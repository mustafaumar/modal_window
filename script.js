const popUp =document.querySelector('.show');
const popDown = document.querySelector('.close')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')


const openUp = function(){
    const email = document.getElementById('email').value
    const valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(email.match(valid)){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }else{
        alert('Write your email address in this format: "johndoe@gmail.com"')
    }
    
};

const closeDown = function(){
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    const email = document.querySelector("#email");
    email.value = "";

};
//The buttons
popUp.addEventListener('click', openUp)
popDown.addEventListener('click', closeDown)


/*const accept = function(){
   if(emailValue.value === pattern){
    modal.classList.remove('hidden')
   } 
   else{
    modal.style.display = 'none'
    overlay.style.display = 'none'
   }
}    if(email.match(pattern)){
    
    }else{
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
    if(email === ''){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }*/