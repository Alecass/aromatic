<template>
  <div id="button">
    <!-- button secondari -->
    <div
      class="secondary-button"
      v-for="(button, index) in secondaryButtons"
      :key="index"
    >
      <img class="secondary-button-img" :src="button" />
    </div>
    <!-- button primari -->
    <div @click="mainButtonClick(id, secondaryButtons)" class="circle-button">
      <img class="circle-button-img" :src="image" :alt="label" />
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    id: Number,
    label: String,
    image: String,
    secondaryButtons: Array
  },
  methods: {
    mainButtonClick(id, secondaryButtons) {
      //se non ha bottonoi secondari al click
      if (secondaryButtons === null) {
        console.log("no secondary buttons on button: ", id);
        //se ha bottoni secondari al click
      } else {
        console.log("has secondary button: ", id);
      }
    }
  }
};
</script>

<style>
#button {
  margin-top: 15px;
  display: flex;
  display: block;
  align-self: center;
}
.circle-button {
  display: flex;
  margin: 0 auto;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.13);
}
.label {
  color: white;
  padding-top: 10px;
  margin: 0 auto;
  text-align: center;
}
.circle-button-img {
  align-self: center;
  margin: auto;
  width: 60%;
  height: 60%;
}

.secondary-button {
  display: flex;
  margin: 0 auto;
  border-radius: 100%;
  width: 25px;
  height: 0px;
  background-color: rgba(255, 255, 255, 0.13);
  margin-bottom: 0px;
  border: solid white 0px;
}

.secondary-button-img {
  margin: auto;
  align-self: center;
  width: 65%;
  height: 65%;
}

.circle-button:hover {
  background-color: white;
}
</style>
