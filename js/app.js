let p_alert = document.getElementsByClassName('alert')[0];
let email = document.getElementsByClassName('email')[0];
let btn = document.getElementsByClassName('email__btn')[0];

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

let removeError = () => {
    p_alert.classList.remove('alert--active');
    email.classList.remove('email--active');

}

let addError = () => {
    p_alert.classList.add('alert--active');
    email.classList.add('email--active');
    setTimeout(() => {
        removeError();
        email.value = '';
    }, 2000);
}

let removeSuccess = () => {
    btn.classList.remove('btn--success');
}

let addSuccess = () => {
    btn.classList.add('btn--success');
    setTimeout(() => {
        removeSuccess();
        email.value = '';
    }, 2000);
}


btn.addEventListener('click', () => {
   if(emailIsValid(email.value)){
    addSuccess();
   }else{
   addError();
}

})