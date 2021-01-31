<template>
  <div class="film">
    <img src="../assets/trooper.jpg" class="responsive">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'FilmTile',

  props: {
    title: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3vw;
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  h1 {
    font-size: 100%;
     width: 100%;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 80%;
     width: 100%;
  }
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

.film {
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
