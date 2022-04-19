import * as Data_business from "./data-business.js";

const createCharacterRow = (character) => {
  const element = document.createElement("div");

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.img;

  return element;
};

const showCharacter = (character) => {
  console.log("character", character);
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
  const breakingBadCharacterQuote = Data_business.getCharacterQuotes(character);
  breakingBadCharacterQuote.then((response) => {
    if (Array.isArray(response)) {
      if (response.length > 0) {
        characterDetail.appendChild(createParagraph("Quotes:"));
        const quotesLength = response.length > 3 ? 3 : response.length;
        for (let quotesIter = 0; quotesIter < quotesLength; quotesIter++) {
          characterDetail.appendChild(createParagraph("- " + response[quotesIter].quote));
        }
      }
    } else {
      console.log(response);
    }
  });
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

export { createCharacterRow, showCharacter };
