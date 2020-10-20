<template>
  <section id="contactContainer" class="home">
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
  </section>
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

#contactContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

#contactCard {
  width: 50%;
  background: #55555533;
  padding: 2em;
}

label {
  margin-bottom: 0.2em;
}

input {
  @include formInput();
  font-size: 0.75em;
}

textarea {
  @include formInput();
  font-size: 1em;
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
