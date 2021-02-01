<template>
  <div id="app">
    <div class="header">
      <h1>Star Wars Character Search</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>


.header {
  background:rgb(26, 167, 202);
  color: white;
  font-size: 2vw;
  margin: 5px;
  border: black solid;
  margin-bottom: 2%;
}

.header h1 {
  text-align: left;
  padding: 5px;
  margin: 0;
}

button {
  background-color: rgb(26, 167, 202);
  box-shadow: 5px 2px;
}

h2 {
  justify-content: start;
  margin-left: 1%;
}


@media screen and (min-width: 400px) {
  h1 {
    font-size: 3vw;
    width: 100%;
  }
  .header {
    font-size: 5vw;
  }
}

@media screen and (max-width: 1000px) {
  h1 {
    font-size: 4vw;
    width: 100%;
  }
  .header {
    font-size: 6vw;
  }
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%; 
  height: 100%; 
  margin: 0px;
}
</style>
