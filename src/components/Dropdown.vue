<template>
  <div class="hello">
      <button @click="dropDown">Sort By</button>
      <ul v-if="menuOpen">
          <button @click="dropDown">Alphebetical Asc</button>
          <button @click="dropDown">Alphebetical Desc</button>
          <button @click="dropDown">Age</button>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    msg: String
  },
  data() {
    return{
      menuOpen: false,
    }
    
  },
    methods: {
    dropDown() {
        this.menuOpen = !this.menuOpen;
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
