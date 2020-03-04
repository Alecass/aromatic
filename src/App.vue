<template>
  <div id="app">
    <Buttons />
  </div>
</template>

<script>
import Buttons from "./components/buttons/Buttons";

export default {
  name: "App",
  components: {
    Buttons
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  background-color: rgb(40, 40, 40);
  width: 960px;
  height: 540px;
}
</style>
