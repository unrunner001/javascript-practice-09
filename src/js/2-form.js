const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formData = { email: '', message: '' };

if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  formData.email = email;
  formData.message = message;
  input.value = email;
  textarea.value = message;
}

function handleClickInput(event) {
  formData.email = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleClickText(event) {
  formData.message = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
  } else {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

input.addEventListener('input', handleClickInput);
textarea.addEventListener('input', handleClickText);
form.addEventListener('submit', handleSubmit);
