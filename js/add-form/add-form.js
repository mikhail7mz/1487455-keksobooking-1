import { initAddFormValidator, validateAddForm, resetAddFormValidator } from './validate-form.js';
import { initFormFieldSyncronizer } from './sync-form-fields.js';

const adForm = document.querySelector('.ad-form');

const onAddFormReset = () => resetAddFormValidator();

const onAddFormSubmit = (event) => {
  event.preventDefault();
  if (validateAddForm()) {
    adForm.submit();
  }
};

const initAddFrom = () => {
  initAddFormValidator();
  initFormFieldSyncronizer();
  adForm.addEventListener('submit', onAddFormSubmit);
  adForm.addEventListener('reset', onAddFormReset);
};

export { initAddFrom };
