<script>
  import { onMount } from 'svelte';
  import { validateForm } from '../../utils/form';
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
  export let name = '';
  export let id = '';

  let novalidate = null;
  let submitting = false;
  let submitted = false;
  onMount(() => {
    novalidate = 'novalidate';
  });

  const handleSubmitForm = async (e) => {
    const res = validateForm(e);
    if (!res) {
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    submitting = true;
    const req = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        formid: id,
      },
      body: new URLSearchParams(formData).toString(),
    });

    const res2 = await req.json();

    submitting = false;
    if (res2.success) {
      submitted = true;
    }
  };
</script>

<Layer>
  <Retain size="lap">
    {#if submitted}
      <h1>That went well.</h1>
    {:else}
      <h1>{name}</h1>
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
