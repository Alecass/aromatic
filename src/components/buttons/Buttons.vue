<template>
  <div id="buttons">
    <div v-for="(button, index) in buttons" :key="index">
      <MainButton
        :id="button.id"
        :label="button.label"
        :image="button.image"
        :secondaryButtons="
          button.secondaryButtons != undefined ? button.secondaryButtons : null
        "
      />
    </div>
  </div>
</template>

<script>
import MainButton from "./MainButton";
//json
import buttons from "../../../static/data/buttons.json";

export default {
  name: "Buttons",
  components: {
    MainButton
  },
  data() {
    return { buttons: buttons };
  },
  created() {
    buttons.reverse();
  }
};
</script>

<style>
#buttons {
  bottom: 30px;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  right: 0px;
  width: 90px;
  margin-right: 10px;
  height: 540px;
}
</style>
