<template>
  <div>
    <div class="FilmData">
      <img src="../assets/trooper.jpg" class="responsive" />
      <div class="Data">
        <h2>Title: {{ this.film.title }}</h2>
        <div class="row">
          <h2 class="ListType">Starships:</h2>
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
        <div class="row">
          <h2 class="ListType">Vehicles:</h2>
          <ul>
            <li v-for="(vehicle, index) in vehicles" :key="index">
              <h2>{{ vehicle }}</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'Home' }">
      <div class="backButton">
        <button>Back</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FilmData",
  data() {
    return {
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
      if (this.$store.getters.filmListlength === 0) {
        this.$store.dispatch("fetchFilms").then(() => {
          this.$store.dispatch("findFilm", this.$router.currentRoute.params.id);
          this.film = this.$store.getters.foundFilm;
          this.fetchFilmData();
        });
      } else {
        this.$store
          .dispatch("findFilm", this.$router.currentRoute.params.id)
          .then(() => {
            this.film = this.$store.getters.foundFilm;
            this.fetchFilmData();
          });
      }
    },

    fetchFilmData() {
      this.film.starships.map((starship) => {
        fetch(starship)
          .then((response) => response.json())
          .then((data) => {
            this.starships.push(data.name);
          });
      });
      this.film.vehicles.map((vehicle) => {
        fetch(vehicle)
          .then((response) => response.json())
          .then((data) => {
            this.vehicles.push(data.name);
          });
      });
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

button {
  font-size: 25px;
  margin-bottom: 15px;
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

.ListType {
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

.backButton {
  text-align: center;
}

@media screen and (min-width: 500px) {
  h2 {
    font-size: 2.5vw;
    width: 100%;
  }
  button {
    font-size: 3vw;
  }
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 3vw;
  }
}

</style>
