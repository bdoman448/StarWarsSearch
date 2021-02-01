<template>
  <div>
    <div class="CharData">
      <img src="../assets/luke1.jpg" class="responsive" />
      <div class="Data">
        <h2>Name: {{ this.char.name }}</h2>
        <h2>Height: {{ this.char.height }}</h2>
        <h2>Homeworld: {{ this.homeworld }}</h2>
        <div class="row">
          <h2 class="ListType">Starship:</h2>
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
          <h2 class="ListType">Vehicle:</h2>
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
  name: "CharData",
  data() {
    return {
      homeworld: "",
      starships: [],
      vehicles: [],
      hidden: true,
      char: Object,
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
        this.$store.dispatch("fetchCharacters").then(() => {
          this.$store.dispatch(
            "findCharacter",
            this.$router.currentRoute.params.id
          );
          this.char = this.$store.getters.foundChar;
          this.fetchCharData();
        });
      } else {
        this.$store.dispatch(
          "findCharacter",
          this.$router.currentRoute.params.id
        );
        this.char = this.$store.getters.foundChar;
        this.fetchCharData();
      }
    },

    fetchCharData() {
      fetch(this.char.homeworld)
        .then((response) => response.json())
        .then((data) => {
          this.homeworld = data.name;
        });
      this.char.starships.map((starship) => {
        fetch(starship)
          .then((response) => response.json())
          .then((data) => {
            this.starships.push(data.name);
          });
      });
      this.char.vehicles.map((vehicle) => {
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
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  margin-right: 0;
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
  margin: 0;
}

a {
  color: #42b983;
}

.CharData {
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

button {
  margin-bottom: 15px;
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
