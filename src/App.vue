<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Vue</h1>

    <main class="main-content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <nav class="global-nav">
      <ul>
        <li><router-link to="/" exact>HOME</router-link></li>
        <li><router-link to="/content1" exact>CONTENT1</router-link></li>
        <li><router-link to="/content2" exact>CONTENT2</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$C_MAIN: #aaa;

/* =====================

グローバルのスタイル

===================== */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: auto;
}

.global-nav {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px 40px;

  ul {
    padding: 0;
    text-align: right;
    list-style: none;

    a {
      text-decoration: none;
      color: #35495e;
      font-weight: bold;
      transition: 0.3s;
      position: relative;

      &:before,
      &:after {
        content: "";
        width: 0px;
        height: 2px;
        background: #41b882;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        transition: 0.2s;
      }

      &:before {
        left: calc(100% + 5px);
      }

      &:after {
        right: calc(100% + 5px);
      }

      &:hover {
        opacity: 0.8;

        &:before,
        &:after {
          width: 10px;
        }
      }
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

.main-content {
  margin: 40px 0;
  padding: 20px;
  border: 1px solid $C_MAIN;
}
</style>
