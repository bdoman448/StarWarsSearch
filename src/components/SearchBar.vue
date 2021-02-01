<template>
  <div class="SearchBar">
    <div>
      <input
        v-if="this.$store.state.sortOption === 1"
        type="text"
        v-model="searchData"
        @click="searchData = ''"
      />
      <input
        v-if="this.$store.state.sortOption === 2"
        type="text"
        v-model="searchData"
        @click="searchData = ''"
      />
    </div>
    <button v-if="this.$store.state.sortOption === 1" @click="filterCharacters">
      Search
    </button>
    <button v-if="this.$store.state.sortOption === 2" @click="filterFilms">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchData: "Search Character",
    };
  },

  methods: {
    filterCharacters() {
      if (this.$store.state.sortOption === 1) {
        this.$store.commit("filterCharacters", this.searchData);
      }
    },
    filterFilms() {
      if (this.$store.state.sortOption === 2) {
        this.$store.commit("filterFilms", this.searchData);
      }
    },
  },
};
</script>

<style>
/*** INPUT ***/

input {
  margin: 15px 0;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  width: auto;
  font-size: 2vw;
}

@media screen and (max-width: 1100px) {
  input {
    font-size: 3vw;
    width: auto;
  }
}

@media screen and (max-width: 500px) {
  input {
    font-size: 4vw;
    width: auto;
    margin: 10px;
  }
  button {
    font-size: 4vw;
  }
}

button {
  font-size: 3vw;
}

input:focus {
  outline: none;
  border-bottom: 3px solid black;
}

.SearchBar {
  text-align: center;
}
</style>
