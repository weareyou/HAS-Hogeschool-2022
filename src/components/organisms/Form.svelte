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
    <form action="/api/submitForm" method="post" {novalidate} on:submit={handleSubmit}>
      <Flow>
        {#each formFields as formField}
          {#if formField.fieldType === 'Short answer'}
            <FormFieldText {...formField} />
          {:else if formField.fieldType === 'Long answer'}
            <FormFieldTextarea {...formField} />
          {:else if formField.fieldType === 'Dropdown'}
            <FormFieldSelect {...formField} />
          {:else if formField.fieldType === 'Multiple choice'}
            <FormFieldControlset
              {...formField}
              type="checkbox"
            />
          {:else if formField.fieldType === 'Single choice'}
            <FormFieldControlset
              {...formField}
              type="radio"
            />
          {:else if formField.fieldType === 'Date'}
            <FormFieldText {...formField}
                           pattern="{'[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}'}"
            />
          {:else if formField.fieldType === 'Data Consent'}
            <FormFieldControlset
              {...formField}
              options={[{ key: 'y', value: formField.settings.AcceptCopy }]}
              type="checkbox"
            />
          {:else}
            <div>No fieldType defined for {formField.fieldType}</div>
          {/if}
        {/each}

        <FormFieldSubmit
          label={submitLabel}
        />
      </Flow>
    </form>
  </Retain>
</Layer>
