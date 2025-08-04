/**
  * This function creates an object with handles 
  * to control the carousel passed in as "id".
  *
  * @param {string} id
  * @returns {Object}
*/

export function Carousel(id) {
  const carouselContainer = document.getElementById(id)
  if (carouselContainer === null) {
    throw new Error(`no element found with id "${id}"`)
  }
  if (!carouselContainer.classList.contains("carousel-container")) {
    throw new Error(`given element (id:"${id}") doesn't contain class "carousel-container"`)
  }

  const carousel = carouselContainer.querySelector(".carousel")
  if (carousel === null) {
    throw new Error(`no carousel element found inside container`)
  }

  const carouselControl = carouselContainer.querySelector(".carousel-control")
  if (carouselControl === null) {
    console.warn("no carousel-control found")
  }


  const carouselItems = []
  for (let child of carousel.children) {
    if (child.classList.contains("carousel-item")) {
      carouselItems.push(child)
    }
  }

  const carouselId = (Math.random() + 1).toString(36).substring(7); // gen random string
  for (let i in carouselItems) {
    carouselItems[i].id = `${carouselId}-${i}`

    var carouselControlButton = document.createElement("a")
    carouselControlButton.href = `#${carouselItems[i].id}`
    carouselControl.appendChild(carouselControlButton)
  }

  const intersectionObserverElement = document.createElement("div")
  intersectionObserverElement.style.position = "absolute"
  intersectionObserverElement.style.top = "50%"
  intersectionObserverElement.style.left = "50%"
  intersectionObserverElement.style.transform = "translateX(-50%)"
  intersectionObserverElement.style.width = "2rem"
  intersectionObserverElement.style.height = "2rem"
  carouselContainer.appendChild(intersectionObserverElement)

  /*
  const intersectionObserver = new IntersectionObserver(
    (e) => { console.log(e) },
    {
      root: intersectionObserverElement,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.9,
    }
  )
  */

  function checkOverflow() {
    console.log("a")
    if (carousel.scrollWidth > carousel.clientWidth) {
      if (!carouselContainer.classList.contains("overflowing")) {
        carouselContainer.classList.add("overflowing")
      }
    }
    else {
      if (carouselContainer.classList.contains("overflowing")) {
        carouselContainer.classList.remove("overflowing")
      }
    }
  }

  carousel.addEventListener("resize", (e) => { checkOverflow })
}

