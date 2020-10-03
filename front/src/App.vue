<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">Moi</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Constantia, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  justify-content: flex-end;
}

#nav {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-around;
  width: 50%;
  border-bottom: black;
  border-style: solid;
  border-width: 1em;
  border-top: none;
  border-right: none;
  a {
    font-weight: bold;
    font-size: 3em;
    color: #2c3e50;
    text-decoration: none;
    margin: 1rem;

    &.router-link-exact-active {
      color: grayscale($color: #42b983);
    }
  }
}

.home {
  padding-top: 10vh;
  padding-bottom: 10vh;
}
</style>
