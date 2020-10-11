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
  color: #111111;
}

header {
  background-color: #333333;
}

#nav {
  width: 20em;
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-around;
  border: 0.5em solid #555555;
  border-top: none;

  a {
    font-weight: bold;
    font-size: 1.5em;
    color: #222222;
    text-decoration: none;
    margin: 1rem;

    &.router-link-exact-active {
      color: #555555;
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
    border: #777777;
    border-style: solid;
    border-width: 0.5em;
  }

  .portfolioDescription {
    margin-left: 5vmin;

    a {
      text-decoration: none;
      color: #777777;
    }
    h3 {
      margin-top: 0;
    }
  }
}
</style>
