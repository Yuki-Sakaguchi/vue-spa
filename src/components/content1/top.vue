<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <nav class="sub-nav">
      <ul>
        <li><router-link to="/content1/" exact>SUBTOP</router-link></li>
        <li><router-link to="/content1/sub1" exact>SUB1</router-link></li>
        <li><router-link to="/content1/sub2" exact>SUB2</router-link></li>
      </ul>
    </nav>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Content1',
  data () {
    return {
      msg: 'Content1'
    }
  },
  head: {
    TitleTemplate: 'TEST',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '説明文'
      }
    ]
  }
}
</script>


<style lang="scss">
.sub-nav {
  position: absolute;
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

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
