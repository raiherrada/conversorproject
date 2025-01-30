const elBtn = document.getElementById("convert-btn")
const elInput = document.getElementById("input-field")
const paragraphOne = document.getElementById("meters")
const paragraphTwo = document.getElementById("liters")
const paragraphThree = document.getElementById("kilograms")

elBtn.addEventListener("click", function(){
    // Validate input
    
    const inputValue = parseFloat(elInput.value);
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Por favor ingresa un número válido.");
        return;
    }
    
    // Clearing the paragraphs

    paragraphOne.textContent = " "
    paragraphTwo.textContent = " "
    paragraphThree.textContent = " "
    
    // Conversions

    const meters = elInput.value * 3.28084
    const feet = elInput.value * 0.3048
    const liters = elInput.value * 0.264172
    const gallons = elInput.value * 3.78541
    const kilograms = elInput.value * 2.20462
    const pounds =  elInput.value * 0.453592
    
    // Update paragraphs with the results

    paragraphOne.textContent += `${elInput.value} metros = ${meters.toFixed(3)} pies | ${elInput.value} pies = ${feet.toFixed(3)} metros`
    paragraphTwo.textContent += `${elInput.value} litros = ${liters.toFixed(3)} galones | ${elInput.value} galones = ${gallons.toFixed(3)} litros`
    paragraphThree.textContent += `${elInput.value} kilos = ${kilograms.toFixed(3)} libras | ${elInput.value} libras = ${pounds.toFixed(3)} kilos`
})
