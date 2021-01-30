<template>
  <div>
    <h1>Hello from STARWARS</h1>
    <div class="CharData">
      <div class="Data">
        <h2>Name: {{ this.char.name }}</h2>
        <h2>Height: {{ this.char.height }}</h2>
        <h2>Homeworld: {{ this.homeworld }}</h2>
        <div class="List">
          <h2 @click="expandArray">Starship:</h2>
          <ul>
            <li v-for="(starship, index) in starships" :key="index">
              {{ starship }}
            </li>
          </ul>
        </div>
      </div>
      <img src="../assets/trooper.jpg" class="responsive" />
    </div>
    <router-link :to="{ name: 'Home' }">
      <button>Back</button>
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
    this.getData()
  },

  methods: {
    getData() {
      if (this.$store.getters.charListlength === 0) {
        this.$store.dispatch("fetchChars").then(() => {
          this.$store.dispatch(
            "findObject",
            this.$router.currentRoute.params.id
          );
          this.char = this.$store.getters.foundObj;
          this.fetchCharData();
        });
      } else {
        this.$store.dispatch("findObject", this.$router.currentRoute.params.id);
        this.char = this.$store.getters.foundObj;
        this.fetchCharData();
      }
    },

    fetchCharData() {
      fetch(this.char.homeworld)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
  font-size: 3vw;
}
ul {
  list-style-type: none;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.CharData {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}

.List {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>
