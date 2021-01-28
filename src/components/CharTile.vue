<template>
  <div class="Char">
    <img src="../assets/luke1.jpg">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CharTile',

  props: {
    msg: String
  },

  data() {
    return{
      charSearch: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
