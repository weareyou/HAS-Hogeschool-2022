<script>
  import { onMount } from 'svelte';
  import FormFieldText from '../form-fields/FormFieldText.svelte';
  import FormFieldSubmit from '../form-fields/FormFieldSubmit.svelte';
  import Flow from '../../atoms/objects/Flow.svelte';
  import { errors, formState } from '../../../utils/form';
  // import FormFieldControlset from '../form-fields/FormFieldControlset.svelte';
  // import FormFieldTextarea from '../form-fields/FormFieldTextarea.svelte';
  // import FormFieldSelect from '../form-fields/FormFieldSelect.svelte';

  let novalidate = null;
  onMount(() => {
    novalidate = 'novalidate';
  });

  const handleSubmit = (e) => {
    const newState = {};
    Object.keys($formState).forEach((key) => {
      const newField = $formState[key];
      newField.touched = true;
      newField.validity = $formState[key].el.validity;
      newState[key] = newField;
    });

    formState.set(newState);

    if (Object.keys($errors).length) {
      e.preventDefault();
      const firstKey = Object.keys($errors)[0];
      const errObj = $formState[firstKey].el;
      errObj.focus();
    }

    e.preventDefault();
  };
</script>

<form action="" method="post" {novalidate} on:submit={handleSubmit}>
  <Flow>
    <FormFieldText
      autocomplete="given-name"
      label="Voornaam"
      name="firstName"
      required
    />
    <FormFieldText
      autocomplete="family-name"
      label="Achternaam"
      name="lastName"
      required
    />
    <FormFieldText
      autocomplete="email"
      label="E-mailadres"
      name="email"
      required
      type="email"
    />
    <FormFieldSubmit
      label="Versturen"
    />
  </Flow>
</form>
