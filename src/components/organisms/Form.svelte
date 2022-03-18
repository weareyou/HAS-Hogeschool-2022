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
  let submitting = false;
  let submitted = false;
  onMount(() => {
    novalidate = 'novalidate';
  });

  const handleSubmitForm = async (e) => {
    submitting = true;
    const res = await handleSubmit(e);
    if (res.success) {
      submitted = true;
    }
    /*
    const res = {
    'formId': 'f5d42b76-cde6-4f4b-8b4d-3cb86da44552',
      'formData': [
        {
          'key': 'name',
          'value': [
            'asdf',
          ],
        },
        {
          'key': 'email',
          'value': [
            '',
          ],
        },
        {
          'key': 'message',
          'value': [
            '',
          ],
        },
      ],
      'validationErrors': null,
      'success': true,
    };
    */
    submitting = false;
  };
</script>

<Layer>
  <Retain size="lap">
    {#if submitted}
      <h1>That went well.</h1>
    {:else}
      <form action="/api/submitForm" method="post" {novalidate} on:submit={handleSubmitForm}>
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
            {submitting}
          />
        </Flow>
      </form>
    {/if}

  </Retain>
</Layer>
