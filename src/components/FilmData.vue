<template>
  <div class="FilmData">
    <img src="../assets/trooper.jpg" class="responsive" />
    <div class="Data">
      <h2>Title: {{ this.film.title }}</h2>
      <h2>Release Date: {{ this.film.release_date }}</h2>
      <h2>Episode Number: {{ this.film.episode_id }}</h2>
      <h2>Director: {{ this.director }}</h2>
      <div class="row">
        <h2 class="header">Characters:</h2>
        <ul>
          <li
            class="list_item"
            v-for="(character, index) in characters"
            :key="index"
          >
            <h2>{{ character }}</h2>
          </li>
        </ul>
      </div>
      <div class="row">
        <h2 class="header">Starships:</h2>
        <ul>
          <li
            class="list_item"
            v-for="(starship, index) in starships"
            :key="index"
          >
            <h2>{{ starship }}</h2>
          </li>
        </ul>
      </div>
    </div>
    <!--     <router-link :to="{ name: 'Home' }">
      <button>Back</button>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "FilmData",
  data() {
    return {
      homeworld: "",
      starships: [],
      vehicles: [],
      hidden: true,
      film: Object,
    };
  },

  props: {
    obj: Object,
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      if (this.$store.getters.charListlength === 0) {
        this.$store.dispatch("fetchFilms").then(() => {
          this.$store.dispatch("findFilm", this.$router.currentRoute.params.id);
          this.char = this.$store.getters.foundFilm;
          this.fetchCharData();
        });
      } else {
        this.$store.dispatch("findObject", this.$router.currentRoute.params.id);
        this.char = this.$store.getters.foundFilm;
        this.fetchCharData();
      }
    },

    fetchCharData() {
      this.film.characters.map((character) => {
        fetch(character)
          .then((response) => response.json())
          .then((data) => {
            this.character.push(data.name);
          });
      });
      this.film.starships.map((starship) => {
        fetch(starship)
          .then((response) => response.json())
          .then((data) => {
            this.starships.push(data.name);
          });
      });
    },

    expandArray() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 5vw;
}

h2 {
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  margin: 1vw;
}
ul {
  list-style-type: none;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
}

img {
  margin: 1vw;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.FilmData {
  display: grid;
  grid-template-columns: 40% auto;
  grid-column-gap: 1vw;
  width: 100%;
  margin: auto;
}

.Data {
  display: flex;
  flex-direction: column;
}

.row {
  display: grid;
  grid-template-columns: auto 1fr;
}

.header {
  display: inline-block;
}

.row li h2 {
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 0px;
}

.row ul {
  margin: 0;
}

.responsive {
  width: 100%;
  height: auto;
}
</style>
