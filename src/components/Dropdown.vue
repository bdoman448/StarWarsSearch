<template>
  <div class="dropdown-menu">
    <button @click="dropDown">Sort By</button>
    <div class="dropdown-content">
      <button @click="sortOption('People')">People</button>
      <button @click="sortOption('Films')">Films</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",

  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    dropDown() {
      this.menuOpen = !this.menuOpen;
    },
    sortOption(option) {
      if (option === 'People') {
        this.$store.dispatch("changeSort", 1)
      } else {
        this.$store.dispatch("changeSort", 2);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-menu {
  position: relative;
  display: inline-block;
  margin-left: 1%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu:hover .dropdown-content {
  display: flex;
}
</style>
