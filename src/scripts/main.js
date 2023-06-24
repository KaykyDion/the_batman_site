document.addEventListener("DOMContentLoaded", function() {
  const accordionHeader = document.querySelectorAll(".accordion__header")
  const navButtons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', openAccordion)
  }

  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
      hiddenAllTabs()
      tab.classList.add('characters__list--is-active')
      removeActiveButton()
      button.target.classList.add('characters__tabs__button--active')
      console.log(tabTarget)
    })
  }

})

function openAccordion(elemento) {
  const classOpen = "accordion--is-open"
  const parentElement = elemento.target.parentNode

  parentElement.classList.toggle(classOpen)
}

function hiddenAllTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('characters__list--is-active')
  }
}

function removeActiveButton() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('characters__tabs__button--active');
  }
}
