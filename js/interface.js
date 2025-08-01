// make sure to import htmx first

let language

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

htmx.onLoad(() => {
  load_nav()
  load_footer()
  load_past_projects()
})
