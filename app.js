"use strict";

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==================== //
const checkbox = document.querySelector('#checkbox');
const minusSum = document.querySelector('#minus-sum');
const plusSum = document.querySelector('#plus-sum');
const minusTerm = document.querySelector('#minus-term');
const plusTerm = document.querySelector('#plus-term');
const plus = document.querySelector('.plus');
const creditSum = document.querySelector('.credit-sum');
let creditSumField = document.querySelector('#credit-sum__field').value;
const creditTerm = document.querySelector('.credit-term');
let creditTermField = document.querySelector('#credit-term__field').value;
let result = document.querySelector('.monthly-payment__field');
let percent = document.querySelector('.credit-percent__field');
const btnCount = document.querySelector('#btn-count');
const btnRequest = document.querySelector('#btn-request');
const btnSubmit = document.querySelector('#btn-submit');

const modalWindow = document.querySelector('.modal-window');
let modalResultSum = document.querySelector('.modal-sum__credit--num');
let modalResultTerm = document.querySelector('.modal-term__credit--num');

const modalThanks = document.querySelector('.modal-thanks');

let persentLess = 7.1;
let persentMore = 7.9;


// ==================== ФУНКЦИИ ==================== //
// Уменьшение и отображение суммы кредита
const sumCreditLess = () => {
   creditSumField = Number(creditSumField);
   let newSum = creditSumField -= parseInt(50000);
   newSum > 0 ? newSum : newSum = 0;
   creditSumField = newSum;
   let creditField = document.querySelector('#credit-sum__field');
   creditField.value = creditSumField;
   calcPayment();
};

// Увеличение и отображение суммы кредита
const sumCreditMore = () => {
   creditSumField = Number(creditSumField);
   let newSum = creditSumField += parseInt(50000);
   newSum <= 3000000 ? newSum : newSum = 3000000;
   creditSumField = newSum;
   let creditField = document.querySelector('#credit-sum__field');
   creditField.value = creditSumField;
   calcPayment();
};

// Уменьшение и отображение срока кредита
const sumTermLess = () => {
   creditTermField = Number(creditTermField);
   let newTerm = creditTermField -= parseInt(1);
   newTerm > 0 ? newTerm : newTerm = 0;
   creditTermField = newTerm;
   let creditTerm = document.querySelector('#credit-term__field');
   creditTerm.value = creditTermField;
   calcPayment();
};

// Увеличение и отображение срока кредита
const sumTermMore = () => {
   creditTermField = Number(creditTermField);
   let newTerm = creditTermField += parseInt(1);
   newTerm <= 60 ? newTerm : newTerm = 60;
   creditTermField = newTerm;
   let creditTerm = document.querySelector('#credit-term__field');
   creditTerm.value = creditTermField;
   calcPayment();
};

// Расчет ежемесячного платежа
const calcPayment = () => {
   let resultPaument = (((creditSumField / 100) * persentLess) + Number(creditSumField)) / creditTermField;
   result.innerHTML = parseInt(resultPaument);
}

// Уменьшение суммы и процентов кредита по нажатию на чекбокс
const percentChange = () => {
   if (checkbox.checked) {
      persentLess = Number(7.1)
   } else {
      persentLess = persentLess = Number(7.9)
   }
   percent.innerHTML = persentLess;
   calcPayment();
}

// Передача суммы и срока кредита в Modal Window
btnRequest.addEventListener('click', (e) => {
   e.preventDefault();
   modalWindow.classList.add('show');
   let showSumCredit = document.querySelector('#credit-sum__field').value;
   let showTermCredit = document.querySelector('#credit-term__field').value;
   modalResultSum.innerHTML = showSumCredit;
   modalResultTerm.innerHTML = showTermCredit;
});

// Отправка заявки на почту
btnSubmit.addEventListener('click', (e) => {
   e.preventDefault();
   modalWindow.classList.remove('show');
   modalThanks.classList.add('show');
   setTimeout(() => {
      modalThanks.classList.remove('show');
   }, 1500);
});



// ==================== ПРОСЛУШИВАТЕЛИ СОБЫТИЙ ==================== //
minusSum.addEventListener('click', sumCreditLess);
plusSum.addEventListener('click', sumCreditMore);
minusTerm.addEventListener('click', sumTermLess);
plusTerm.addEventListener('click', sumTermMore);
btnCount.addEventListener('click', calcPayment);
checkbox.addEventListener('change', percentChange);









// var str = "100000";
// alert(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));