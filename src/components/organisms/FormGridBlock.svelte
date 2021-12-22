<script>
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
</script>

<Layer>
  <Retain size="lap">
    <form action="" method="post">
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
            />
          {:else if formField.type.name === 'Long answer'}
            <FormFieldTextarea
              label={formField.name}
              name={formField.alias}
              required={formField.required}
            />
          {:else if formField.type.name === 'Dropdown'}
            <FormFieldSelect
              label={formField.name}
              name={formField.alias}
              options={formField.options}
              required={formField.required}
            />
          {:else if formField.type.name === 'Multiple choice'}
            <FormFieldControlset
              label={formField.name}
              name={formField.alias}
              options={formField.options}
              required={formField.required}
              type="checkbox"
            />
          {:else if formField.type.name === 'Single choice'}
            <FormFieldControlset
              label={formField.name}
              name={formField.alias}
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
              type="date"
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
