import { fetchLetters } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
  )
