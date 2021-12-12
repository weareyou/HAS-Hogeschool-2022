import { derived, writable } from 'svelte/store';

const formState = writable({});

const errors = derived(formState, ($formState) => {
  const errorMessages = {
    valueMissing: 'Dit is een vereist veld.',
    typeMismatch: 'Dit is geen geldige invoer.',
    patternMismatch: 'Dit is geen geldige invoer.',
    // rangeOverflow: 'Deze waarde ligt te hoog.',
    // rangeUnderflow: 'Deze waarde ligt te laag.',
    // invalidDate: ' Dit is geen geldige datum.',
    // outOfRangeDateHistory: 'De datum ligt te ver in het verleden.',
    // outOfRangeDateFuture: 'De datum ligt te ver in de toekomst.',
  };

  const err = {};

  Object.keys($formState).forEach((key) => {
    // if not touched or input is valid, return early
    // if (!$formState[key].touched || $formState[key].validity.valid) {
    if (!$formState[key].touched || $formState[key].validity.valid) {
      return;
    }
    if ($formState[key].validity.valueMissing) {
      err[key] = errorMessages.valueMissing; // 'Dit is een vereist veld.';
    }
    if ($formState[key].validity.typeMismatch) {
      err[key] = errorMessages.typeMismatch; // 'Dit is geen geldige invoer.';
    }
    if ($formState[key].validity.patternMismatch) {
      err[key] = errorMessages.patternMismatch; // 'Dit is geen geldige invoer.';
    }
  });

  return err;
});

export { formState, errors };
