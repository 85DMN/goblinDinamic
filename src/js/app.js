import NewPicture from "./jumper";

const interval = 1000;
const evend = 4;
const lineOf = 4;

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  //ставим событие click на строки

  const liner = [];
  let timer;

  for (let i = 0; i < evend; i++) {
    liner.push(document.getElementById(`line${i + 1}`));
  }

  //стираем все!!!!!!!!!!!!!!
  function lastic() {
    document.getElementsByClassName("mistake")[0].textContent = 0;
    document.getElementsByClassName("fine")[0].textContent = 0;
  }

  //функция перемещения
  function moved() {
    window.widget.addPicture();
    const badler = document.getElementsByClassName("mistake")[0];
    badler.textContent = Number(badler.textContent) + 1;
    if (Number(badler.textContent) > lineOf) {
      const dialog = document.getElementById("myDialog");
      dialog.showModal();
      document.getElementById("closeDialog").addEventListener("click", () => {
        document.querySelectorAll(".cell")[widget.position].innerHTML = "";
        lastic();
        dialog.close();
      });
      clearInterval(timer);      
    }
  }

  liner.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      if (event.target.tagName == "IMG") {
        const finer = document.getElementsByClassName("fine")[0];
        finer.textContent = Number(finer.textContent) + 1;

        clearInterval(timer);
        window.widget.addPicture();
        timer = setInterval(() => {
          moved();
        }, interval);

        const badler = document.getElementsByClassName("mistake")[0];
        badler.textContent = 0;
      }
    });
  });

  timer = setInterval(() => {
    moved();
  }, interval);
});
