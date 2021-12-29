import { derived, writable } from 'svelte/store';

const formState = writable({});

const errors = derived(formState, ($formState) => {
  const err = {};

  Object.keys($formState).forEach((key) => {
    // if not touched or input is valid, return early
    if (!$formState[key].touched || $formState[key].validity.valid) {
      return;
    }
    if ($formState[key].validity.valueMissing) {
      err[key] = 'valueMissing';
    }
    if ($formState[key].validity.typeMismatch) {
      err[key] = 'typeMismatch';
    }
    if ($formState[key].validity.patternMismatch) {
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
  Object.keys($formState).forEach((key) => {
    const newField = $formState[key];
    newField.touched = true;
    newField.validity = $formState[key].el.validity;
    $formState[key] = newField;
  });

  formState.set($formState);

  if (Object.keys($errors).length) {
    e.preventDefault();
    const firstKey = Object.keys($errors)[0];
    const firstField = $formState[firstKey].el;
    firstField.focus();
  }

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
