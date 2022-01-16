import {sendLetter} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const userAuthor = document.querySelector("select[name='authors']").value
        const userMessage = document.querySelector("input[name='letterMessage']").value
        const userTopic = document.querySelector("input[name='letterTopic']").value
        const userRecipient = document.querySelector("select[name='recipients']").value

        const dataToSendToAPI = {
            author: userAuthor,
            message: userMessage,
            topic: userTopic,
            recipient: userRecipient
        }

        sendLetter(dataToSendToAPI)
    }
})

export const LetterForm = () => {
    let html = `
        <div class="list">
            <label class="label" for="letterAuthor">Author</label>
            <select name="authors" id="authors">
                <option value= "Choose author...">Choose author...</option>
                <option value= "Piper Halliwell">Piper Halliwell</option>
                <option value= "Phoebe Halliwell">Phoebe Halliwell</option>
                <option value= "Prue Halliwell">Prue Halliwell</option>
                <option value= "Paige Matthews">Paige Matthews</option>
            </select>
        </div>
        <div class="field">
            <label class="label" for="letterMessage">Letter</label>
            <input type="text" name="letterMessage" class="input" />
        </div>
        <div class="field">
            <label class="label" for="letterTopic">Topic</label>
            <input type="radio" name="letterTopic" value= "Business" class="radio" />
            <label for="Business">Business</label><br>
            <input type="radio" name="letterTopic" value= "Friendly" class="radio" />
            <label for="Friendly">Friendly</label><br>
            <input type="radio" name="letterTopic" value= "Family" class="radio" />
            <label for="Family">Family</label><br>
            <input type="radio" name="letterTopic" value= "Congrats" class="radio" />
            <label for="Congrats">Congrats</label><br>
            <input type="radio" name="letterTopic" value= "Condolences" class="radio" />
            <label for="Condolences">Condolences</label><br>
        </div>
        <div class="list">
            <label class="label" for="letterRecipient">Recipient</label>
            <select name="recipients" id="recipients">
                <option value= "Choose recipient...">Choose recipient...</option>
                <option value= "Piper Halliwell">Piper Halliwell</option>
                <option value= "Phoebe Halliwell">Phoebe Halliwell</option>
                <option value= "Prue Halliwell">Prue Halliwell</option>
                <option value= "Paige Matthews">Paige Matthews</option>
            </select>
        </div>
        <button class="button" id="sendLetter">Send Letter</button>
    `
    return html
}

