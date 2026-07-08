import myImage from "../img/goblin.png";

export default class NewPicture {
  constructor() {
    this.parentEl = document.querySelector(".container");
    this.bindToDOM();
    this.position = 0;
    this.picture = document.createElement("img");
    this.picture.src = myImage; //
    this.sells_count = 16;
    this.repiat = 4;
  }

  static get markup() {
    return `
        <table class="face">
            <tr id="line1">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line2">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line3">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line4">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
        </table>
        <table class="data">
        <tr>
            <td>
                <h1>Промахи:</h1>
            </td>
            <td>
                <h1 class="mistake">0</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h1>Попадания:</h1>
            </td>
            <td>
                <h1 class="fine">0</h1>
            </td>
        </tr>
        
        <table>

        <dialog id="myDialog">
          <p>Вы проиграли.</p>
          <button type="button" id="closeDialog">Закрыть</button>
        </dialog>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = NewPicture.markup;
  }

  clearImage() {
    const deleter = document.querySelector(".imager");
    if (deleter != null) {
      deleter.remove();
    }
  }

  addPicture() {
    for (let i = 0; i < this.repiat; i++) {
      const posit = Math.floor(Math.random() * this.sells_count);
      if (posit != this.position) {
        const cells = document.querySelectorAll(".cell");
        this.clearImage();

        cells[posit].append(this.picture);

        this.position = posit;
        break;
      }
    }
  }
}
