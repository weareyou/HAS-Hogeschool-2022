<script>
  import { Form } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { onMount } from 'svelte';
  import Layer from '../components/atoms/objects/Layer.svelte';
  import Retain from '../components/atoms/objects/Retain.svelte';
  import FormFieldText from '../components/molecules/forms/FormFieldText.svelte';
  import FormFieldSubmit from '../components/molecules/forms/FormFieldSubmit.svelte';
  import Flow from '../components/atoms/objects/Flow.svelte';
  // import FormFieldControlset from '../components/molecules/forms/FormFieldControlset.svelte';
  // import FormFieldTextarea from '../components/molecules/forms/FormFieldTextarea.svelte';
  import FormFieldSelect from '../components/molecules/forms/FormFieldSelect.svelte';
  // import ErrorMessage from '../components/atoms/input/ErrorMessage.svelte';

  let novalidate = null;
  onMount(() => {
    novalidate = '';
  });

  const formProps = {
    initialValues: {
      lastName: '',
      select: '',
    },
    validationSchema: yup.object().shape({
      lastName: yup.string().required(),
      select: yup.string().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  };
</script>


<Layer>
  <Retain size="lap">
    <Form {...formProps} {novalidate}>
      <Flow>
        <FormFieldText
          autocomplete="family-name"
          label="Achternaam"
          name="lastName"
          required
        />
        <FormFieldSelect
          label="Select"
          name="select"
          options={[
                 {
                   value: '',
                   label: 'Choose...',
                 },
                 {
                   value: 'blue',
                   label: 'Blue',
                 },
                 {
                   value: 'red',
                   label: 'Red',
                 },
                 {
                   value: 'green',
                   label: 'Green',
                 },
                 ]}
          required
        />
        <!--
<FormFieldControlset
    label="Aanhef"
    name="salutation"
    required
    type="radio"
    options="{[
    {
      value: 'm',
      label: 'Dhr.',
    },
    {
      value: 'v',
      label: 'Mevr.',
    },
    ]}"
  />
  <FormFieldControlset
    label="Multicheck"
    name="multicheck"
    required
    type="checkbox"
    options="{[
    {
      value: 'blue',
      label: 'Blue',
    },
    {
      value: 'red',
      label: 'Red',
    },
    {
      value: 'green',
      label: 'Green',
    },
    ]}"
  />
  <FormFieldText
    autocomplete="given-name"
    label="Voornaam"
    hint="Kan"
    name="firstName"
  />
  <FormFieldText
    autocomplete="email"
    label="E-mailadres"
    name="email"
    type="email"
    required
  />
  <FormFieldTextarea
    label="Textarea"
    name="textarea"
    required
  />
  -->
        <FormFieldSubmit
          label="Versturen"
        />
      </Flow>

    </Form>
  </Retain>
</Layer>
