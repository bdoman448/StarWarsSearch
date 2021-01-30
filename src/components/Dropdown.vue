<template>
  <div class="hello">
    <button @click="dropDown" >Sort By</button>
    <ul v-if="menuOpen">
<!--       <button @click="sortOption('Asc')">Alphebetical Asc</button>
      <button @click="sortOption('Dsc')">Alphebetical Desc</button>
      <button @click="sortOption('Age')">Age</button> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDown",

  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    dropDown() {
      this.menuOpen = !this.menuOpen;
    },
/*     sortOption(option) {
      if (option === "Asc") {
        this.list.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (option === "Dsc") {
        this.list.sort((a, b) => (a.name < b.name ? 1 : -1));
      } else {
        this.list.sort((a, b) => (a.age > b.age ? 1 : -1));
      }
    }, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  display: inline-flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}

</style>
