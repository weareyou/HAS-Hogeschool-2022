<script>
  import { onMount } from 'svelte';
  import { handleSubmit } from '../../../utils/form';
  import Flow from '../../atoms/objects/Flow.svelte';
  import FormFieldText from '../form-fields/FormFieldText.svelte';
  import FormFieldSubmit from '../form-fields/FormFieldSubmit.svelte';
  import FormFieldSelect from '../form-fields/FormFieldSelect.svelte';
  import FormFieldControlset from '../form-fields/FormFieldControlset.svelte';
  import FormFieldTextarea from '../form-fields/FormFieldTextarea.svelte';

  let novalidate = null;
  onMount(() => {
    novalidate = 'novalidate';
  });
</script>

<form action="" method="post" {novalidate} on:submit={handleSubmit}>
  <Flow>
    <FormFieldControlset
      label="Aanhef"
      name="salutation"
      options="{['Dhr.', 'Mevr.']}"
      required
      type="radio"
    />
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
    <FormFieldSelect
      label="Select"
      name="select"
      options={['Blue', 'Red', 'Green']}
      required
    />
    <FormFieldTextarea
      label="Textarea"
      name="textarea"
      required
    />
    <FormFieldSubmit
      label="Versturen"
    />
  </Flow>
</form>
