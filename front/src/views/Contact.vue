<template>
  <div class="home">
    <div id="contactCard" class="card">
      <form>
        <label for="name">Nom, prénom ou pseudo</label><br />
        <input type="text" id="name" name="name" /><br />
        <label for="email">Email</label><br />
        <input type="text" id="email" name="email" /><br />
        <label for="message">Votre message</label><br />
        <textarea id="message" name="message"></textarea>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@mixin formInput() {
  border: #555555;
  border-style: solid;
  border-width: 0.25em;
  width: 100%;
  resize: vertical;
  margin-bottom: 0.5em;
  font-size: 0.75em;
  padding: 0.3em;
}

#contactCard {
  width: 50%;
  background: #55555533;
  padding: 2em;
}

label {
  margin-bottom: 0.2em;
}

input,
textarea {
  @include formInput();
}
</style>

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
