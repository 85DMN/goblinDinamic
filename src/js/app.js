import NewPicture from "./jumper";

const interval = 1000;
const evend = 4;
const lineOf = 5;

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  //ставим событие click на строки

  const liner = [];
  let timer;

  for (let i = 0; i < evend; i++) {
    liner.push(document.getElementById(`line${i + 1}`));
  }

  function obrabotchik(event) {
    console.log('зашел в обработчик', event)
    if (event.target.tagName == "IMG") {
      const finer = document.getElementsByClassName("fine")[0];
      finer.textContent = Number(finer.textContent) + 1;
      window.widget.addPicture();
      const badler = document.getElementsByClassName("mistake")[0];
      badler.textContent = 0;
    }
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
      lastic();

      const dialog = document.getElementById('myDialog')
      dialog.showModal()
      document.getElementById('closeDialog').addEventListener('click', ()=>{
        dialog.close()
      })
      clearInterval(timer);
      document.querySelectorAll('.cell')[widget.position].innerHTML = '' 

      /*if (confirm("Вы проиграли...  Хотите начать заново?")) {
        clearInterval(timer);
        timer = setInterval(() => {
          moved();
        }, interval);
      } else {
               
      } */      
    }
  }

  liner.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      if (event.target.tagName == "IMG") {
        const finer = document.getElementsByClassName("fine")[0];
        finer.textContent = Number(finer.textContent) + 1;

        clearInterval(timer)
        window.widget.addPicture();
        timer = setInterval(() => {
          moved();
        }, interval)
        
        const badler = document.getElementsByClassName("mistake")[0];
        badler.textContent = 0;
      }
    })
  });

  timer = setInterval(() => {
    moved();
  }, interval)
  
})

  
