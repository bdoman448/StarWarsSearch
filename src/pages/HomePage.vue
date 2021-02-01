<template>
  <div class="Search">
    <SearchBar />
    <h2 v-if="this.$store.state.sortOption === 1">
      Showing {{ visibleChars }} of {{ this.$store.getters.charListlength }}
    </h2>
    <h2 v-if="this.$store.state.sortOption === 2">
      Showing {{ visibleFilm }} of {{ this.$store.getters.filmListlength }}
    </h2>
    <DropDown />
    <div v-if="this.$store.state.sortOption === 1">
      <ul>
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in this.$store.state.filteredChars"
          :key="index"
        >
          <router-link :to="{ name: 'Character', params: { id: obj.name } }">
            <CharacterTile :name="obj.name" />
          </router-link>
        </li>
      </ul>
    </div>

    <div v-if="this.$store.state.sortOption === 2">
      <ul>
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in this.$store.state.filteredFilms"
          :key="index"
        >
          <router-link :to="{ name: 'Film', params: { id: obj.title } }">
            <FilmTile :title="obj.title" />
          </router-link>
        </li>
      </ul>
    </div>
    <div  class="expand_list"
      v-if=" !expand && this.$store.state.sortOption === 2
            && (this.$store.getters.filteredFilmList > 4)" >
      <button @click="expandList" >
        Load More
      </button>
    </div>

    <div  class="expand_list"
      v-if=" !expand && this.$store.state.sortOption === 1
            && (this.$store.getters.filteredCharList > 4)" >
      <button @click="expandList" >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import DropDown from "../components/Dropdown";
import SearchBar from "../components/SearchBar.vue";
import CharacterTile from "../components/CharacterTile.vue";
import FilmTile from "../components/FlimTile.vue";

export default {
  name: "HomePage",
  components: {
    DropDown,
    SearchBar,
    CharacterTile,
    FilmTile,
  },
  data() {
    return {
      searchData: "Search Character",
      expand: false,
      visibleChars: 0,
      visibleFilm: 0
    };
  },

  mounted() {
    this.setupLists();
  },

  updated() {
    this.visibleCharacters();
    this.visibleFilms();
  },

  methods: {
    visibleCharacters() {
      if (this.$store.state.sortOption === 1 && this.$store.getters.filteredCharList > 4 && !this.expand) {
        this.visibleChars = 4;
      } else {
        this.visibleChars = this.$store.getters.filteredCharList;
      }
    },

    visibleFilms() {
      if (this.$store.state.sortOption === 2 && this.$store.getters.filteredFilmList > 4 && !this.expand) {
        this.visibleFilm = 4;
      } else {
        this.visibleFilm = this.$store.getters.filteredFilmList;
      }
    },

    setupLists() {
      this.$store.dispatch("fetchCharacters");
      this.$store.dispatch("fetchFilms");
    },
    expandList() {
      this.expand = !this.expand;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/****  LIST CSS ****/

ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 100%;
}

ul li.hidden:nth-of-type(1n + 5) {
  display: none;
}

li {
  display: inline-block;
  margin: 0 10px;
  margin-bottom: 55px;
}

li a {
  text-decoration: none;
  color: black;
}

h2 {
  justify-content: start;
  margin-left: 1%;
}

.active {
  display: inline-block;
}

/**** LOAD MORE CSS ****/
.expand_list {
  text-align: center;
}

.expand_list button {
  width: 99%;
}

button {
  box-shadow: 5px 2px;
}

h2 {
  justify-content: start;
  margin-left: 1%;
}

@media screen and (max-width: 1000px) {
  h2 {
    font-size: 3vw;
    margin-left: 2%;
  }
  .expand_list button {
    width: 98%;
  }
}

@media screen and (min-width: 1000px) {
  button {
    font-size: 2vw;
    margin-bottom: 2%;
  }
}
</style>
