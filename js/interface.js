// make sure to import htmx first

function load_nav() {
  htmx.ajax("GET", "templates/nav.html", { target: "#nav", swap: "outerHTML" })
}
function load_footer() {
  htmx.ajax("GET", "templates/footer.html", { target: "#footer", swap: "outerHTML" })
}

function load_past_projects() {
  try {
    htmx.ajax("GET", "templates/portfolio.html", { target: "#portfolio", swap: "outerHTML" })
  } catch (exception) {
    console.log("Error: ")
  }
}

function handle_animate_on_appear() {
  /**
    * @param {Array.<Element>} entries
    * @param {Array} observer
  */
  function startAnimation(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }

  const observer = new IntersectionObserver(startAnimation)
  const options = { root: null, rootMargin: "25vh", threshold: 1 }

  const elements = document.querySelectorAll('.animate');
  elements.forEach(el => {
    observer.observe(el, options);
  });
}

htmx.onLoad(() => {
  load_nav()
  load_footer()
  load_past_projects()
  handle_animate_on_appear()
})


