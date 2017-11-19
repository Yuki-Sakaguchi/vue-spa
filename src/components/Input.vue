<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="sample">
    <p>{{ sample }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Input',
      sample: 'sample'
    }
  }
}
</script>