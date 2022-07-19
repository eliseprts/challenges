const adviceNumber = document.querySelector(".adviceNumber")
const adviceBody = document.querySelector(".adviceBody")

const getAdvice = async () => {
    let response = await fetch("https://api.adviceslip.com/advice")
    let advice = await response.json()
    // console.log(advice)

    adviceNumber.innerHTML = advice.slip.id
    adviceBody.innerHTML = advice.slip.advice
}

window.addEventListener("load", getAdvice())