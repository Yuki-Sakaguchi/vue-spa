<template>
  <div class="content">
    <h1>{{ msg }}</h1>
    
    <nav class="sub-nav">
      <ul>
        <li><router-link to="/content1/" exact>SUBTOP</router-link></li>
        <li><router-link to="/content1/sub1" exact>SUB1</router-link></li>
        <li><router-link to="/content1/sub2" exact>SUB2</router-link></li>
      </ul>
    </nav>

    <div class="sub-content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
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
  margin: auto;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      width: 33.3%;
      float: left;

      a {
        display: block;
        padding: 10px 0;
        text-decoration: none;
        color: #35495e;
        font-weight: bold;
        transition: 0.3s;
        position: relative;

        &:before {
          content: "";
          width: 0px;
          height: 2px;
          background: #41b882;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          transition: 0.5s;
        }

        &:hover {
          opacity: 0.6;

          &:before {
            width: 50%;
          }
        }
      }
    }
  }
}

.sub-content {
  border: 1px solid #41b882;
  background-color: #41b882;
  margin: 20px;

  .sub-title {
    color: white;
  }

  p {
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    color: white;
  }
}
</style>
