<template>
  <div id="buttons">
    <MainButton />
  </div>
</template>

<script>
import MainButton from "./MainButton";
export default {
  name: "Buttons",
  components: {
    MainButton
  }
};
</script>

<style>
#buttons {
  position: absolute;
  right: 0px;
  background-color: blueviolet;
  width: 90px;
  margin-right: 10px;
  height: 540px;
}
</style>
