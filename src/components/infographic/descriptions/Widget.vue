<template>
  <div id="widget">
    <h1>Vino: {{ bottle }} - Bottone: {{ button }}</h1>
  </div>
</template>

<script>
import state from "../../../assets/state";

export default {
  name: "Widget",
  data() {
    return {
      bottle: state.watchBottle(),
      button: state.watchButton(),
      buttons: []
    };
  },
  mounted() {
    this.buttons = document.querySelectorAll(".primary-button");
    this.buttons.forEach(button => {
      button.addEventListener("click", () => {
        this.button = state.watchButton();
      });
    });
    window.addEventListener("keypress", e => {
      this.bottle = state.watchBottle();
    });
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
</style>
