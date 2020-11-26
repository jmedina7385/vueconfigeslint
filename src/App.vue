<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <h1>{{ msg.default }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: {
        type:String,
        default: "Hola mundo Vue.js App"
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
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
