const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const priceSlider = adForm.querySelector('.ad-form__slider');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.querySelectorAll('fieldset, select');

const setFormElementsState = (formElements, state) => {
  formElements.forEach((element) => {
    element.disabled = state;
  });
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  priceSlider.classList.remove('hidden');
  setFormElementsState(adFormElements, false);
};

const enableMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  setFormElementsState(mapFiltersElements, false);
};

export { enableAdForm, enableMapFilters };
