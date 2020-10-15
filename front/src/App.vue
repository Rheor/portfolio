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
    <footer>
      <div id="footerNav">
        <router-link to="/">Portfolio</router-link>
        <router-link to="/about">Moi</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </footer>
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

html {
  position: relative;
  min-height: 100%;
}

header {
  background-color: #333333;
}

footer {
  height: 2em;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #333333;
}

@mixin centeredDiv($width) {
  width: $width;
  margin: 0 auto;
}

@mixin centerWrapFlex() {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

@mixin cardDisplay() {
  padding: 1em;
  border: black;
  border-style: solid;
  border-width: 0.25em;
  background: white;
  text-align: left;
  margin: 0.5em;
}

#nav {
  @include centeredDiv(20em);
  @include centerWrapFlex();
  background-color: white;
  padding: 1em;
  flex-wrap: wrap;

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

#footerNav {
  @include centeredDiv(10em);
  @include centerWrapFlex();
  a {
    text-decoration: none;
    color: #ffffff;
  }
}

.home {
  padding-top: 4em;
  padding-bottom: 4em;
  padding-right: 4em;
  padding-left: 4em;
}

.card {
  @include cardDisplay();
}

.portfolioClient {
  @include cardDisplay();
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
