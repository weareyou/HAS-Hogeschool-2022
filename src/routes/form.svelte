<script>
  import Layer from '../components/atoms/objects/Layer.svelte';
  import Retain from '../components/atoms/objects/Retain.svelte';
  import FormFieldText from '../components/molecules/forms/FormFieldText.svelte';
</script>

<Layer>
  <Retain>
    <form action="" method="post">
      <FormFieldText
        autocomplete="given-name"
        label="Voornaam"
        name="firstName"
        required
      />
    </form>
  </Retain>
</Layer>
