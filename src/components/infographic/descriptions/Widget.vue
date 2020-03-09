<template>
  <div id="widget">
    <h1>Bottle: {{ bottle }} - Button: {{ button }}</h1>
  </div>
</template>

<script>
import { state } from "../../../assets/state.new";

export default {
  name: "Widget",
  computed: {
    bottle() {
      return state.bottle;
    },
    button() {
      return state.button;
    }
  },
  watch: {
    bottle: function() {},
    button: function() {}
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
</style>
