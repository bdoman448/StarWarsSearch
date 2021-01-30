<template>
  <div class="Search">
<!--     @input="filterList" -->
    <input type="text" v-model="charSearch"  @input="filterList" @click="charSearch = ''"/>
    <h2>Showing {{visibleChars}} of {{ this.$store.getters.charList.length }}</h2>
    <DropDown />
    <div>
      <ul class="result">
        <li
          :class="expand ? 'active' : 'hidden'"
          v-for="(obj, index) in this.$store.state.filteredChars"
          :key="index"
        >
        <router-link  :to="{name:'Char', params: {id: obj.name, obj:obj}}">
          <CharTile :name="obj.name"/>
        </router-link>
        </li>
      </ul>
    </div>
    <button class="expand_list" v-if="!expand && this.$store.getters.charList.length > 0" @click="expandList">
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
      expand: false,

      visibleChars: 0,
    };
  },

  mounted(){
    this.$store.dispatch("fetchChars");
    this.$store.dispatch("fetchFilms");
  },

  updated(){
    this.visibleCharacters()
  },

  methods: {
    expandList() {
      this.expand = !this.expand;
    },
    filterList() {
      this.$store.commit('filterResults',this.charSearch)
    },
    visibleCharacters(){
      if(this.$store.state.filteredChars.length > 4 && !this.expand)
      {
        this.visibleChars = 4;
      }else
        this.visibleChars = this.$store.getters.filteredCharList.length
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
