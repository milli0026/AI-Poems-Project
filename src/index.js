function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `La tombe dit à la rose
        <br />
        Des pleurs dont l'aube t'arrose`,
    autoStart: true,
    delay: 1,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
