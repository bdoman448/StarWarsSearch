<template>
  <div class="Search">
    <input type="text" v-model="charSearch" @input="filterList" @click="charSearch = ''" @mouseleave="charSearch = 'Search Character'" />
    <button @click="getSwData">Get data</button>
    <h2>Showing {{visibleChars}} of {{ receivedResults.length }}</h2>
    <DropDown :list="filteredResults" />
    <div>
      <ul class="result">
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in filteredResults"
          :key="index"
        >
        <router-link  v-if="receivedResults[0]" :to="{name:'Char', params: {id: obj.name, obj:obj}}">
          <CharTile :name="obj.name"/>
        </router-link>
        </li>
      </ul>
    </div>
    <button class="expand_list" v-if="!expand && this.receivedResults.length > 0" @click="expandList">
      Load More
    </button>
  </div>
</template>

<script>
import CharTile from "./CharTile.vue";
import DropDown from "./Dropdown.vue";

export default {
  name: "Search",
  components: {
    CharTile,
    DropDown,
  },
  data() {
    return {
      charSearch: "Search Character",
      receivedResults: [],
      filteredResults: [],
      expand: false,
      sort_option: 1,
      visibleChars: 0,
    };
  },

  created(){
    this.getSwData()
  },

  methods: {
    getSwData() {
      fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => {
          this.receivedResults = [...data.results];  //used for searching
          this.filteredResults = this.receivedResults;
          this.visibleChars = this.visibleCharacters();
        });
    },
    expandList() {
      this.expand = !this.expand;
      this.visibleChars = this.visibleCharacters();
    },
    filterList() {
      this.filteredResults = this.receivedResults.filter((result) => {
        return result.name.toUpperCase().match(this.charSearch.toUpperCase());
      });
      this.visibleChars = this.visibleCharacters();
    },
    visibleCharacters(){
      if(this.filteredResults.length > 4 && !this.expand)
      {
        return 4;
      }else
        return this.filteredResults.length
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
}

h2 {
  justify-content: start;
}

ul li.hidden:nth-of-type(1n + 5) {
  display: none;
}

.active {
  font-family: "Courier New", Courier, monospace;
}

.result {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.expand_list {
  width: 98%;
}

.search {
  display: flexbox;
}
</style>
