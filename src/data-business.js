function getInfo() {
  return fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.statusText;
      }
    })
    .catch(
      (error) =>
        (document.getElementById("root").innerHTML =
          "No se ha encontrado la fuente")
    );
}

function getCharacterQuotes(character) {
  const nameParam = character.name.replace(/ /g, "+");
  const quoteAPI =
    "https://www.breakingbadapi.com/api/quote?author=" + nameParam;
  return fetch(quoteAPI)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.statusText;
      }
    })
    .catch((error) => {
      return "No se ha encontrado la fuente de las frases";
    });
}

export { getInfo, getCharacterQuotes };
