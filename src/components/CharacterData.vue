<template>
  <div class="Search">
    <h1>Hello from {{ homeworld }}</h1>
    <img src="../assets/trooper.jpg" class="responsive">
    <h1>Vehicle {{ vehicle }}</h1>
    <ul>
      <li v-for="(starship,index) in starships" :key="index">
        {{starship}}
      </li>
    </ul>
        <ul>
      <li v-for="(vehicle,index) in vehicles" :key="index">
        {{vehicle}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CharData",
  data() {
    return {
      homeworld: "Search Character",
      starships: [],
      vehicles: [],
      films: [],
    };
  },

  props: {
    obj: Object,
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      fetch(this.obj.homeworld)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.homeworld = data.name;
        });
      this.obj.starships.map((starship) => {
        fetch(starship)
          .then((response) => response.json())
          .then((data) => {
            this.starships.push(data.name)
          });
      });
      this.obj.vehicles.map((vehicle) => {
        fetch(vehicle)
          .then((response) => response.json())
          .then((data) => {
            this.vehicles.push(data.name)
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.char {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>
