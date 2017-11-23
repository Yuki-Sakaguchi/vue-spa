<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      sample sample sample sample sample sample 
      sample sample sample sample sample sample 
      sample sample sample sample sample sample 
    </p>
    <p>
      sample sample sample sample sample sample 
      sample sample sample sample sample sample 
      sample sample sample sample sample sample 
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hellow, world!'
    }
  }
}
</script>


<style lang="scss" scoped>
p {
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}
</style>