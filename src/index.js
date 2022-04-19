import "./styles.css";
import * as Data_business from "./data-business.js";
import * as Utils from "./utils.js";

const breakingBadData = Data_business.getInfo();
breakingBadData.then((response) => {
  if (Array.isArray(response)) {
    document.getElementById("root").innerHTML = "";
    for (const character of response) {
      const element = Utils.createCharacterRow(character);
      element.onclick = function () {
        Utils.showCharacter(character);
      };
      document.getElementById("root").append(element);
    }
  } else {
    console.log(response);
  }
});
