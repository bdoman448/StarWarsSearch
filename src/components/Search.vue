<template>
  <div class="Search">
    <div class="Input">
      <input
        type="text"
        v-model="charSearch"
        @input="filterList"
        @click="charSearch = ''"
      />
      <button>Search</button>
    </div>
    <h2>
      Showing {{ visibleChars }} of {{ this.$store.getters.charList.length }}
    </h2>
    <DropDown />
    <div v-if="this.$store.state.sortOption === 1">
      <ul class="result">
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in this.$store.state.filteredChars"
          :key="index"
        >
          <router-link
            :to="{ name: 'Char', params: { id: obj.name } }"
          >
            <CharTile :name="obj.name" />
          </router-link>
        </li>
      </ul>
      <button
        class="expand_list"
        v-if="!expand && this.$store.getters.charList.length > 0"
        @click="expandList"
      >
        Load More
      </button>
    </div>

    <div v-if="this.$store.state.sortOption === 2">
      <ul class="result">
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in this.$store.state.filteredFilms"
          :key="index"
        >
        <router-link  :to="{name:'Film', params: {id: obj.title}}">
          <FilmTile :title="obj.title"/>
        </router-link>
        </li>
      </ul>

    <button class="expand_list" v-if="!expand && this.$store.getters.charList.length > 0" @click="expandList">
      Load More
    </button>
    </div>


  </div>
</template>

<script>
import CharTile from "./CharTile.vue";
import DropDown from "./Dropdown.vue";
import FilmTile from "./FlimTile.vue";

export default {
  name: "Search",
  components: {
    CharTile,
    DropDown,
    FilmTile
  },
  data() {
    return {
      charSearch: "Search Character",
      expand: false,

      visibleChars: 0,
    };
  },

  mounted() {
    this.$store.dispatch("fetchChars");
    this.$store.dispatch("fetchFilms");
  },

  updated() {
    this.visibleCharacters();
  },

  methods: {
    expandList() {
      this.expand = !this.expand;
    },
    filterList() {
      if(this.$store.state.sortOption === 1){
      this.$store.commit("filterResults", this.charSearch);}
    },
    visibleCharacters() {
      if (this.$store.state.filteredChars.length > 4 && !this.expand) {
        this.visibleChars = 4;
      } else this.visibleChars = this.$store.getters.filteredCharList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  margin-bottom: 3%;
  padding: 4px;
  background-color: gray;
}

li a {
  text-decoration: none;
  color: black;
}

h2 {
  justify-content: start;
  margin-left: 1%;
}

ul li.hidden:nth-of-type(1n + 5) {
  display: none;
}

/****  CLASS CSS ****/

.active {
  font-family: "Courier New", Courier, monospace;
}

.result {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: start;
}

.Input {
  display: grid;
  justify-content: center;
}

.Input button {
  display: block;
}

.expand_list {
  width: 98%;
}
</style>
