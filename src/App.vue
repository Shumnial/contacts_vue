<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Contacts/>
  </div>

</template>

<script>
import Contacts from "./components/Contacts";

export default {
  name: "App",
  components: {
    Contacts
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
</style>
