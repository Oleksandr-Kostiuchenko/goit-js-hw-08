//TODO: Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання.
//? Обов’язково очищай значення в інпуті по краях від пробілів . 
//? Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// ---------------------- Search Elements -------------------------------
//*  Find elements
const nameInput = document.querySelector('input');
const nameSpan = document.querySelector('#name-output');
// ---------------------- /Search Elements -------------------------------

// ---------------------- Function -------------------------------
//*  Function of checking and greeting user based on his name
const greetUser = () => {
    const editedInputTextContent = nameInput.value.trim();

    if(editedInputTextContent === '') {
        nameSpan.textContent ='Anonymous';

        nameInput.classList.remove('correct');
        nameInput.classList.add('incorrect');
    } else {
        nameSpan.textContent = editedInputTextContent;
        
        nameInput.classList.remove('incorrect');
        nameInput.classList.add('correct');
    }
};

nameInput.addEventListener('input', greetUser);
// ---------------------- /Function -------------------------------
