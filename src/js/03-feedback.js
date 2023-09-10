import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

let formData = {};

feedbackFormEl.addEventListener('input', throttle(localData, 500));

function localData() {
  formData = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    emailEl.value = localData.email;
    messageEl.value = localData.message;
  }
  formData = localData;
}
getLocalData();

feedbackFormEl.addEventListener('submit', submitData);
function submitData(event) {
  event.preventDefault();
  if (emailEl.value.trim() !== '' && messageEl.value.trim() !== '') {
    console.log(formData);
    feedbackFormEl.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
