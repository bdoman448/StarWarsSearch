<template>
  <div class="CharacterCard">
    <img src="../assets/luke1.jpg" class="responsive" />
    <div class="CardTitle">
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterTile",

  props: {
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.CharacterCard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  background-color: rgb(26, 167, 202);
  padding: 1px;
  padding-top: 5px;
  height: 100%;
  margin-bottom: 5%;
}

img {
  max-width: 98%;
  max-height: auto;
  margin: auto;
  min-width: 95%;
}

h1 {
  height: 100%;
  padding: 0;
  margin: 0;
}

@media screen and (min-width: 400px) {
  h1 {
    font-size: 3vw;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .CharacterCard{
      padding-top: 2px;
  }
}
</style>
