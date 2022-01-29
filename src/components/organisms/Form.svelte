<script>
  import { onMount } from 'svelte';
  import { handleSubmit } from '../../utils/form';
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Flow from '../atoms/objects/Flow.svelte';
  import FormFieldSubmit from '../molecules/form-fields/FormFieldSubmit.svelte';
  import FormFieldText from '../molecules/form-fields/FormFieldText.svelte';
  import FormFieldTextarea from '../molecules/form-fields/FormFieldTextarea.svelte';
  import FormFieldSelect from '../molecules/form-fields/FormFieldSelect.svelte';
  import FormFieldControlset from '../molecules/form-fields/FormFieldControlset.svelte';

  export let formFields = [];
  export let submitLabel = '';

  let novalidate = null;
  onMount(() => {
    novalidate = 'novalidate';
  });
</script>

<Layer>
  <Retain size="lap">
    <form action="" method="post" {novalidate} on:submit={handleSubmit}>
      <Flow>
        {#each formFields as formField}
          {#if formField.type.name === 'Short answer'}
            <FormFieldText
              name={formField.alias}
              label={formField.name}
              hint={formField.hint}
              required={formField.required}
              type={formField.settings.FieldType}
              autocomplete={formField.autocomplete}
              errorMessages={formField.errorMessages}
            />
          {:else if formField.type.name === 'Long answer'}
            <FormFieldTextarea
              name={formField.alias}
              label={formField.name}
              hint={formField.hint}
              required={formField.required}
              errorMessages={formField.errorMessages}
            />
          {:else if formField.type.name === 'Dropdown'}
            <FormFieldSelect
              name={formField.alias}
              label={formField.name}
              hint={formField.hint}
              required={formField.required}
              options={formField.options}
              errorMessages={formField.errorMessages}
            />
          {:else if formField.type.name === 'Multiple choice'}
            <FormFieldControlset
              name={formField.alias}
              label={formField.name}
              hint={formField.hint}
              required={formField.required}
              type="checkbox"
              options={formField.options}
              errorMessages={formField.errorMessages}
            />
          {:else if formField.type.name === 'Single choice'}
            <FormFieldControlset
              label={formField.name}
              name={formField.alias}
              hint={formField.hint}
              options={formField.options}
              required={formField.required}
              type="radio"
            />
          {:else if formField.type.name === 'Date'}
            <FormFieldText
              autocomplete={formField.AutocompleteAttribute}
              label={formField.name}
              name={formField.alias}
              required={formField.required}
              type="text"
              pattern="{'[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}'}"
            />
          {:else if formField.type.name === 'Data Consent'}
            <FormFieldControlset
              label={formField.name}
              name={formField.alias}
              options={[formField.settings.AcceptCopy]}
              required={formField.required}
              type="checkbox"
            />
          {:else}
            <div>No fieldType defined for {formField.type.name}</div>
          {/if}
        {/each}

        <FormFieldSubmit
          label={submitLabel}
        />
      </Flow>
    </form>
  </Retain>
</Layer>
