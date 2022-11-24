import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import Notiflix from 'notiflix';


// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

const date = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    locale: Ukrainian,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if(selectedDates[0]<date) alert('carl!!')
  },
};

const a = flatpickr('#datetime-picker', options
// {
//   enableTime: true,
//   dateFormat: 'Y-m-d H:i',
//   locale: Ukrainian,
//   minDate: date,
//   disableMobile: 'true',
// }
);

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  span: document.querySelector('span'),
};
let timerId = null;
let count = 0;
refs.start.addEventListener('click', start);
function start() {
  console.log(a.selectedDates);
  console.log(getDay());
}
