//TODO: Напиши скрипт управління формою логіна.
//? відправлення форми form.login-form повинна відбуватися за подією submit.
//? Під час відправлення форми сторінка не повинна перезавантажуватися.
//? Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//? Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
//? При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// ---------------------- Search Elements -------------------------------
//* Find elements
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
// ---------------------- /Search Elements -------------------------------

// ---------------------- Function -------------------------------
//* Function of managing form
loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const editedInputEmail = emailInput.value.trim();
    const editedInputPassword = passwordInput.value.trim();

    if(editedInputEmail === '' || editedInputPassword === ''){
        return alert('All form fields must be filled in');
    } else if (editedInputEmail !== '' && editedInputPassword !== ''){
        const dataObj = {
            [loginForm.elements.email.name]: loginForm.elements.email.value,
            [loginForm.elements.password.name]: loginForm.elements.password.value,
        }
        console.log(dataObj);
        loginForm.reset();
    }
});
// ---------------------- /Function -------------------------------
