<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="charSearch">
    <h1>{{charSearch}}</h1>
    <button @click="getSwData">Get data</button>
    <h2>Showing X of {{results.length}}</h2>
    <DropDown />
  <div>
    <ul>
       <li v-for="(obj, index) in results" :key="index" @click="checkObj(obj)" >
        <CharTile msg="Placeholder"/>
      </li>
    </ul>
  </div>
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script>
import CharTile from './CharTile.vue'
import DropDown from './Dropdown.vue'
export default {
  name: 'Search',
  props: {
    msg: String
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
    }
    
  },
    methods: {
      getSwData() {
          fetch('https://swapi.dev/api/planets/1/').then(response=>response.json())
          .then(data=>{
            this.result = data;
            this.fillList() 
          })
      },
      fillList() 
      {
        let i = 0;
        for(i;i<5;i++)
        {
          console.log("A")
          this.results.push(this.result);
        }
      },
      checkObj(obj)
      {
        console.log(obj)
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
</style>
