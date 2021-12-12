<script>
  import { createForm, Form } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { onMount } from 'svelte';
  import FormFieldText from '../form-fields/FormFieldText.svelte';
  import FormFieldSubmit from '../form-fields/FormFieldSubmit.svelte';
  import Flow from '../../atoms/objects/Flow.svelte';
  import FormFieldSelect from '../form-fields/FormFieldSelect.svelte';

  let novalidate = null;
  onMount(() => {
    novalidate = '';
  });

  const formContext = createForm({
    initialValues: {
      firstName: '',
      lastName: '',
      select: '',
      salutation: '',
      multicheck: '',
      textarea: '',
      email: '',
    },
    validationSchema: yup.object().shape({
      lastName: yup.string().required(),
      select: yup.string().required(),
    }),
    onSubmit: (values) => {
      // console.log(b);
      alert(JSON.stringify(values, null, 2));
    },
  });
</script>

<Form context={formContext} {novalidate}>
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
