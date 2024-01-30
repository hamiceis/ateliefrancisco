let btn = document.querySelector('#backToTopButton')
const clothes = document.querySelector("#clothes")
const clients = document.getElementById("clientes")

function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScroll()
 
 activateMenuAtCurrentSection(home)
 activateMenuAtCurrentSection(services)
 activateMenuAtCurrentSection(about)
 activateMenuAtCurrentSection(contact)
}

const activateMenuAtCurrentSection = (section) => {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedLine = targetLine >= sectionTop
  
  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}



const showBackToTopButtonOnScroll = () => {
  scrollY > 400 
  ? btn.classList.add('show') 
  : btn.classList.remove('show')
}

const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')

}


const tp = {
  origin: 'top',
  distance: '30px',
  duration: 700,
}

const ids = `
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card
#about, 
#about header, 
#about .content`


ScrollReveal(tp).reveal(ids)


function updatedStats (element, limit) {
  let duration = 3000
  let interval = 15
  let increment = Math.ceil(limit / (duration / interval))
  let currentCount = 0

  let timer = setInterval(() => {
    currentCount += increment
    if(currentCount >= limit) {
      clearInterval(timer)
      currentCount = limit 
    }
    element.textContent = `+${currentCount}`
  }, interval)
}

function scrollHandler() {
  let scrollPositionY = window.scrollY;
  let triggerPosition = 400;

  if (scrollPositionY === triggerPosition) {
    updatedStats(clients, 3575);
    updatedStats(clothes, 5843);
  }

}

window.addEventListener("scroll", scrollHandler);



