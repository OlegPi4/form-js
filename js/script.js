const myForm = document.forms.main;
const myFormInput1 = myForm.nameInput;
const myFormInputTextar = myForm.nameTextarea;
const txtInput1 = document.querySelector('.main-form__input');
const maxLengthInput = txtInput1.getAttribute('maxlength');
const txtTextarea = document.querySelector('.main-form__textarea');
const maxLengthTextarea = txtTextarea.getAttribute('maxlength');
const masageInput1 = document.querySelector('.input_1-massage');
const masageTextarea = document.querySelector('.input_2-massage');

// проверка заполнения полей nameInput, nameTextarea формы 
myForm.addEventListener("submit", function (event) {
   if (!myFormInput1.value) {
      masageInput1.className = "warn";
      masageInput1.textContent = 'Поле не заполнено';
      event.preventDefault();
   }
   if (!myFormInputTextar.value) {
      masageTextarea.className = "warn";
      masageTextarea.textContent = 'Поле не заполнено';
      event.preventDefault();   
   }
});
// снимаем сообщение class="warn" по клику на поле
myFormInput1.addEventListener("focus", function (e) {
   masageInput1.className = "input_1-massage";
   masageInput1.textContent = '';
});   
   
myFormInputTextar.addEventListener("focus", function (e) {
   masageTextarea.className = "input_2-massage";
   masageTextarea.textContent = '';
});
// счетчики символов input и textarea
document.addEventListener('input', function (event) {
   if (event.target.closest('.main-form__input')) {
      masageInput1.innerHTML = 'Максимальна довжина 30 сим. залишилось -' + " <span>"+(maxLengthInput - txtInput1.value.length)+"</span>";
   }
     if (event.target.closest('.main-form__textarea')) {
      masageTextarea.className = "input_2-massage";
      masageTextarea.innerHTML = 'Максимальна довжина 600 сим. залишилось -' + " <span>" + (maxLengthTextarea - txtTextarea.value.length) + "</span>";
   }
});
// контроль вставки на textarea
myFormInputTextar.addEventListener("paste", function (event) {
   masageTextarea.className = "warn";
   masageTextarea.textContent = 'Вставлять нельзя!';
   event.preventDefault();
});