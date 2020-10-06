<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Portfolio</router-link>
        <router-link to="/about">Moi</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Constantia, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  border-bottom: black;
  border-style: solid;
  border-width: 0.5em;
  border-top: none;
  border-right: none;
  a {
    font-weight: bold;
    font-size: 1.5em;
    color: #2c3e50;
    text-decoration: none;
    margin: 1rem;

    &.router-link-exact-active {
      color: grayscale($color: #42b983);
    }
  }
}

.home {
  padding-top: 4em;
  padding-bottom: 4em;
  padding-right: 4em;
  padding-left: 4em;
}

.card {
  padding: 1em;
  border: black;
  border-style: solid;
  border-width: 0.25em;
  background: white;
  text-align: left;
  margin: 0.5em;
}

.portfolioClient {
  width: 50em;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content: space-between;

  img {
    height: 10em;
    width: 20em;
    border: gray;
    border-style: solid;
    border-width: 0.5em;
  }

  .portfolioDescription {
    margin-left: 5vmin;

    a {
      text-decoration: none;
      color: gray;
    }
    h3 {
      margin-top: 0;
    }
  }
}
</style>
