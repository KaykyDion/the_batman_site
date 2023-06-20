document.addEventListener("DOMContentLoaded", function() {
  const accordionHeader = document.querySelectorAll(".accordion__header")

  for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', openAccordion)
  }

})

function openAccordion(elemento) {
  const classOpen = "accordion--is-open"
  const parentElement = elemento.target.parentNode

  parentElement.classList.toggle(classOpen)
}