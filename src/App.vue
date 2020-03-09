<template>
  <div id="app">
    <Infographic />
    <Buttons />
  </div>
</template>

<script>
import Infographic from "./components/infographic/Infographic";
import Buttons from "./components/buttons/Buttons";
import { state, setBottle } from "./assets/state.new";

export default {
  name: "App",
  components: {
    Infographic,
    Buttons
  },
  computed: {
    setBottle() {
      return setBottle;
    }
  },
  mounted() {
    console.log("App.vue/set listener");

    // avvio il listenr che ascolta la bottiglia corrente (numero della tastiera)
    this.setBottle();
  }
};
</script>

<style>
@font-face {
  font-family: "Poppins Regular";
  src: url("../static/fonts/Poppins-Regular.ttf") format(ttf);
}
@font-face {
  font-family: "Poppins Italic";
  src: url("../static/fonts/Poppins-Light.ttf") format(ttf);
}
@font-face {
  font-family: "Poppins Bold";
  src: url("../static/fonts/Poppins-Bold.ttf") format(ttf);
}
@font-face {
  font-family: "Playfair Display Regular";
  src: url("../static/fonts/PlayfairDisplay-Regular.ttf") format(ttf);
}
@font-face {
  font-family: "Playfair Display Italic";
  src: url("../static/fonts/PlayfairDisplay-Italic.ttf") format(ttf);
}
@font-face {
  font-family: "Playfair Display Bold";
  src: url("../static/fonts/PlayfairDisplay-Bold.ttf") format(ttf);
}
body {
  overflow: hidden;
}
#app {
  width: 1920px;
  height: 1080px;
}
* {
  user-select: none;
  padding: 0;
  margin: 0;
}
.capitalize {
  text-transform: capitalize;
}
.uppercase {
  text-transform: uppercase;
}
</style>
