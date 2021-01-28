<template>
  <div class="Char">
    <img src="../assets/luke1.jpg" class="responsive">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CharTile',

  props: {
    name: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 5vw;
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

.char {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>
