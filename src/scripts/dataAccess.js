const applicationState = {
    letters: []
}

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (sentLetters) => {
                applicationState.letters = sentLetters
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetter = (userSentLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSentLetter)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}