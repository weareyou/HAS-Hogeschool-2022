import { derived, writable } from 'svelte/store';

const formState = writable({});

const errors = derived(formState, ($formState) => {
  const err = {};

  Object.entries($formState).forEach(([key, value]) => {
    // if not touched or input is valid, return early
    if (!value.touched || value.validity.valid) {
      return;
    }
    if (value.validity.valueMissing) {
      err[key] = 'valueMissing';
    }
    if (value.validity.typeMismatch) {
      err[key] = 'typeMismatch';
    }
    if (value.validity.patternMismatch) {
      err[key] = 'patternMismatch';
    }
  });

  return err;
});

// subscribe to formState here
let $formState;
formState.subscribe((value) => {
  $formState = value;
});

// subscribe to errors here
let $errors;
errors.subscribe((value) => {
  $errors = value;
});

const handleSubmit = (e) => {
  // loop over fields
  Object.entries($formState).forEach(([key, value]) => {
    const newField = value;
    newField.touched = true;
    newField.validity = value.el.validity;
    $formState[key] = newField;
  });
  // set to state
  formState.set($formState);
  // check for errors
  if (Object.keys($errors).length) {
    e.preventDefault();
    const firstKey = Object.keys($errors)[0];
    const firstField = $formState[firstKey].el;
    firstField.focus();
  }
  // for testing purposes, might do a real POST
  e.preventDefault();
};

const register = (el) => {
  if (!Object.keys(el).length) {
    return false;
  }

  $formState[el.name] = {
    touched: false,
    el,
  };

  el.addEventListener('change', () => {
    $formState[el.name].touched = true;
    $formState[el.name].validity = el.validity;
    formState.set($formState);
  });

  return {
    destroy() {
      // todo: check cleanup formstate
      delete $formState[el.name];
      formState.set($formState);
    },
  };
};

export {
  formState, errors, handleSubmit, register,
};
