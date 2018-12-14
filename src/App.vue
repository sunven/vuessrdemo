<template>
  <div>
    <Foo />
    <hr>
    <Bar />
  </div>
</template>

<script>
import Foo from "./components/Foo";
import Bar from "./components/Bar";
export default {
  name: "app",
  components: { Foo, Bar },
  data() {
    return {};
  },
  beforeCreate() {
    console.log("App beforeCreate");
  },
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
