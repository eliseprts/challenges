const inputsValidity = {
    cardholder: false,
    cardNbr: false,
    cardDate: false,
    cardCVC: false
}

// Error messages
const errorMsg = document.querySelectorAll(".error-msg")

// Name validation
const nameInput = document.querySelector(".cardholder")

nameInput.addEventListener("blur", nameValidation)
nameInput.addEventListener("input", nameValidation)

function nameValidation() {
    if (nameInput.value.length > 0) {
        showValidation({ index: 0, input: nameInput, validation: true })
        inputsValidity.cardholder = true
    } else {
        showValidation({ index: 0, input: nameInput, validation: false })
        inputsValidity.cardholder = false
    }
}

function showValidation({ index, input, validation }) {
    if (validation) {
        input.style.border = "1px solid #22c55e"
        errorMsg[index].style.display = "none"
    } else {
        input.style.border = "1px solid #ff5252"
        errorMsg[index].style.display = "block"
    }
}

// Card number validation (visa)
const cardNbrInput = document.querySelector(".card-number")

cardNbrInput.addEventListener("blur", cardNbrValidation)
cardNbrInput.addEventListener("input", cardNbrValidation)

const regexCardNbr = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/

function cardNbrValidation() {

    if (cardNbrInput.value.length === 4) {
        cardNbrInput.value += " "
    } else if (cardNbrInput.value.length === 9) {
        cardNbrInput.value += " "
    } else if (cardNbrInput.value.length === 14) {
        cardNbrInput.value += " "
    }

    if (regexCardNbr.test(cardNbrInput.value)) {
        showValidation({ index: 1, input: cardNbrInput, validation: true })
        inputsValidity.cardNbr = true
    } else {
        showValidation({ index: 1, input: cardNbrInput, validation: false })
        inputsValidity.cardNbr = false
    }

}

// Date validation

const cardDateInput = document.querySelector(".card-date")

cardDateInput.addEventListener("blur", cardDateValidation)
cardDateInput.addEventListener("input", cardDateValidation)

const regexDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

function cardDateValidation() {

    if (cardDateInput.value.length === 2) {
        cardDateInput.value += "/"
    }

    if (regexDate.test(cardDateInput.value)) {
        showValidation({ index: 2, input: cardDateInput, validation: true })
        inputsValidity.cardDate = true
    } else {
        showValidation({ index: 2, input: cardDateInput, validation: false })
        inputsValidity.cardDate = false
    }
}

// CVC validation

const cvcInput = document.querySelector(".card-cvc")

cvcInput.addEventListener("blur", cvcValidation)
cvcInput.addEventListener("input", cvcValidation)

function cvcValidation() {
    if (cvcInput.value.length === 3) {
        showValidation({ index: 3, input: cvcInput, validation: true })
        inputsValidity.cardCVC = true
    } else {
        showValidation({ index: 3, input: cvcInput, validation: false })
        inputsValidity.cardCVC = false
    }
}

// Form validation
const form = document.querySelector("form")
const successMsg = document.querySelector(".success-msg")

// Elements on the card
const imgCardCvc = document.querySelector(".card-back-cvc")
const imgCardNbr = document.querySelector(".card-front-number")
const imgCardholder = document.querySelector(".card-front-name")
const imgCardDate = document.querySelector(".card-front-date")

form.addEventListener("submit", handleForm)

function handleForm(e) {
    e.preventDefault()

    const keys = Object.keys(inputsValidity)
    const succeedInputs = keys.filter(key => inputsValidity[key])
    const failedInputs = keys.filter(key => !inputsValidity[key])

    if (succeedInputs.length === 4) {
        // Hide form and display success msg
        form.style.display = "none"
        successMsg.style.display = "flex"
        imgCardCvc.textContent = cvcInput.value
        imgCardNbr.textContent = formattingCardNbr(cardNbrInput.value, cardNbrInput)
        imgCardholder.textContent = nameInput.value
        imgCardDate.textContent = cardDateInput.value
    } else {
        alert("Please fill in all fields")
    }
}

// Formatting card number
function formattingCardNbr(value, input) {
    let formattedNbr = value.match(/.{1,4}/g).join(" ")
    // console.log(formattedNbr)
    return formattedNbr
}