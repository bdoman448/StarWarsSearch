<template>
  <div class="Search">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="charSearch">
    <h1>{{charSearch}}</h1>
    <button @click="getSwData">Get data</button>
    <h2>Showing X of {{results.length}}</h2>
    <DropDown />
  <div>
    <ul class="result">
       <li :class="expand ? 'active' : 'hidden' " v-for="(obj, index) in results" :key="index" @click="checkObj(obj)" >
        <CharTile :name='obj.name'/>
      </li>
    </ul>
  </div>
    <button class="expand_list" v-if="!expand" @click="expandList">Load More</button>
  </div>
</template>

<script>
import CharTile from './CharTile.vue'
import DropDown from './Dropdown.vue'
export default {
  name: 'Search',
  props: {
    name: String
  },
  components : {
    CharTile,
    DropDown
  },
  data() {
    return{
      charSearch: '',
      result: Object,
      results: [],
      expand: false,
    }
    
  },
    methods: {
      getSwData() {
          fetch('https://swapi.dev/api/people/').then(response=>response.json())
          .then(data=>{
            this.results = [...data.results]; 
            console.log(this.results)
          })
      },
      checkObj(obj)
      {
        console.log("OBJ je")
        console.log(obj.name)
      },
      expandList ()
      {
        this.expand = !this.expand
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

ul li.hidden:nth-of-type(1n+5) {
  display: none;
}

.active {
  font-family: 'Courier New', Courier, monospace;
}

.result {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.expand_list{
  width: 98%;
}


</style>
