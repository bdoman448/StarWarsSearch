<template>
  <select class="select" v-model="selected" @change="sortOption(selected)">
    <option value="SortBy" selected disabled hidden>Sort By</option>
    <option value="People">People</option>
    <option value="Film">Films</option>
  </select>
</template>

<script>
export default {
  name: "DropDown",

  data() {
    return {
      selected: "SortBy",
    };
  },
  methods: {
    dropDown() {
      this.menuOpen = !this.menuOpen;
    },
    sortOption(option) {
      if (option === "Film") {
        this.$store.dispatch("changeSort", 2);
      } else {
        this.$store.dispatch("changeSort", 1);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {
  margin-left: 1%;
  border: 1px solid;
  font-size: 20px;
}

@media screen and (max-width: 1000px) {
  .select {
    font-size: 4vw;
    margin-left: 2%;
  }
}

@media screen and (max-width: 400px) {
  .select {
    font-size: 3vw;
    margin-left: 2%;
  }
}
</style>
