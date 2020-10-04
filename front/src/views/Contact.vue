<template>
  <div class="home">
    <p>
      Vous pouvez me joindre à l'adresse mail suivante : {{ this.mailAddress }}.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  props: {
    mailAddress: String,
  },
  components: {},
};
</script>
