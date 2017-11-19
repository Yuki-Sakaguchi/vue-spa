<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Vue</h1>

    <transition name="fade">
      <router-view/>
    </transition>

    <nav class="global-nav">
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/input" exact>Input</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.global-nav {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;

  ul {
    padding: 0;
    text-align: right;
    list-style: none;

    a {
      text-decoration: none;
      color: #35495e;
      font-weight: bold;
    }
  }
}

.fade-enter-active {
  transition: opacity 2s
}

.fade-enter,
.fade-leave {
  opacity: 0
}
</style>
