<template>
  <div id="button">
    <!-- button secondari -->
    <div
      @click="e => secondaryButtonClick(e, index)"
      class="secondary-button"
      v-for="(button, index) in secondaryButtons"
      :key="index"
    >
      <WrapperSVG :id="'secondary-button-svg' + index">
        <component :is="button" />
      </WrapperSVG>
    </div>
    <div
      @click="e => primaryButtonClick(e, id, secondaryButtons)"
      class="primary-button"
    >
      <WrapperSVG width="100%" height="100%" :id="'svg' + id">
        <component :is="svg" />
      </WrapperSVG>
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import WrapperSVG from "../../utils/WrapperSVG";
//svg
import Vino from "../../../static/svg/buttons/Vino";
import Terroir from "../../../static/svg/buttons/Terroir";
import Tavola from "../../../static/svg/buttons/Tavola";
import Vinificazione from "../../../static/svg/buttons/Vinificazione";
import Location from "../../../static/svg/buttons/Location";
import Fragolina from "../../../static/svg/buttons/Fragolina";
import { state, setButton } from "../../assets/state.new";

export default {
  name: "MainButton",
  components: {
    WrapperSVG,
    Vino,
    Terroir,
    Tavola,
    Vinificazione,
    Location,
    Fragolina
  },
  props: {
    id: Number,
    label: String,
    svg: String,
    secondaryButtons: Array
  },
  data() {
    return {
      opened: true,
      selectedState: null,
      primaryButtonsEl: [],
      secondaryButtonsElement: []
    };
  },
  computed: {
    setButton() {
      return setButton;
    }
  },
  mounted() {
    //cerca e carica i puslanti
    this.primaryButtonsEl = document.querySelectorAll(".primary-button");
    this.secondaryButtonsEl = document.querySelectorAll(".secondary-button");
  },
  methods: {
    openCloseSecondaryButtons(opened) {
      if (opened === false) {
        this.opened = true;
      }
    },
    //controlla stato e mostra o rimuovi bottoni secondari
    checkIfOpened(opened) {
      if (opened) {
        this.secondaryButtonsEl.forEach(button => {
          button.classList.add("secondary-button-opened");
        });
      } else {
        this.secondaryButtonsEl.forEach(button => {
          button.classList.remove("secondary-button-opened");
        });
      }
    },
    //colora di bianco il pulsante selezionato primario
    changeStylePrimary(id) {
      let buttons = [0, 1, 2, 3];
      const style = this.primaryButtonsEl[id].style;
      style.backgroundColor = "white";
      style.boxShadow = "0px 0px 30px 2px white";
      buttons.splice(id, 1);
      buttons.map(button => {
        this.primaryButtonsEl[button].style.backgroundColor =
          "rgba(255, 255, 255, 0.13)";
        this.primaryButtonsEl[button].style.boxShadow =
          "0px 0px 10px 0px #404040";
      });
    },
    //stila il pulsante secondario selezionato
    changeStyleSecondary(id) {
      let buttons = [0, 1];
      this.secondaryButtonsEl[id].style.backgroundColor = "white";
      buttons.splice(id, 1);
      buttons.map(button => {
        this.secondaryButtonsEl[button].style.backgroundColor =
          "rgba(255, 255, 255, 0.13)";
      });
    },
    //click su pulsante primario
    primaryButtonClick(e, id, secondaryButtons) {
      this.selectedState = id;
      this.setButton(this.selectedState);
      this.selectedPrimaryButton = id;
      //add style
      this.changeStylePrimary(id);
      //check for secondary buttons
      if (secondaryButtons === null) {
        this.opened = false;
        this.checkIfOpened(this.opened);
      } else {
        this.openCloseSecondaryButtons(this.opened);
        this.checkIfOpened(this.opened);
        //reset secondary buttons color on click
        this.secondaryButtonsEl[0].style.backgroundColor =
          "rgba(255, 255, 255, 0.13)";
        this.secondaryButtonsEl[1].style.backgroundColor =
          "rgba(255, 255, 255, 0.13)";
      }
    },
    secondaryButtonClick(e, id) {
      this.changeStyleSecondary(id);
      this.selectedState = id + 4;

      this.setButton(this.selectedState);
    }
  }
};
</script>

<style>
#button {
  margin-top: 15px;
  display: flex;
  display: block;
}
.primary-button {
  text-align: center;
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.13);
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s;
  box-shadow: 0px 0px 10px 0px #404040;
}
.label {
  font-size: 11pt;
  font-family: "Playfair Display Light";
  color: white;
  padding-top: 10px;
  margin: 0 auto;
  text-align: center;
}
#svg0 {
  padding-top: 16px;
  padding-left: 14.5px;
}
#svg1 {
  padding-top: 16px;
  padding-left: 16px;
}
#svg2 {
  padding-top: 17px;
  padding-left: 16.5px;
}
#svg3 {
  padding-top: 15.5px;
  padding-left: 14.2px;
}
.secondary-button {
  display: flex;
  width: 0px;
  height: 0px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.13);
  border: solid white 0px;
  border-radius: 100%;
  transition: all ease 0.2s;
}
#secondary-button-svg0 {
  padding-left: 10px;
  padding-top: 11px;
}
#secondary-button-svg1 {
  padding-left: 11.5px;
  padding-top: 8px;
}
#secondary-button-svg0 .cls-1 {
  fill: #b14d74;
}
#secondary-button-svg1 .cls-1 {
  fill: #b14d74;
}
.secondary-button-opened {
  width: 35px;
  height: 35px;
  border: solid white 1px;
  margin-bottom: 10px;
}
</style>
