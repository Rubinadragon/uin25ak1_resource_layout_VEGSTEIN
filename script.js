//https://www.w3schools.com/howto/howto_js_tabs.asp
//https://stackoverflow.com/questions/10510063/javascript-object-reference-linked-to-object-in-array
//https://www.w3schools.com/howto/howto_js_active_element.asp
//https://stackoverflow.com/questions/72348956/how-to-map-through-a-deeply-nested-array-of-objects
//https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time
//https://stackoverflow.com/questions/48707227/how-to-filter-a-javascript-map

const html = document.getElementById("HTMLtab")
const css = document.getElementById("CSStab")
const js = document.getElementById("JStab")
const react = document.getElementById("reacttab")
const sanity = document.getElementById("sanitytab")
const header = document.getElementById("tabs")
const btn = header.getElementsByClassName("tab")

html.addEventListener("click", switchTab)
css.addEventListener("click", switchTab)
js.addEventListener("click", switchTab)
react.addEventListener("click", switchTab)
sanity.addEventListener("click", switchTab)

//Headerprint
headerHTML = []

//Pushe fra ressurser inn i resourceHTML
resources.forEach((object, index) => {
    headerHTML.push(object.category)
})
let resourceHTML = ""

//Startfane

resources.map((resource, index) => resourceHTML +=
        `<h2>${resources[index].category}</h2>
            <p>${resources[index].text}</p>
            <ul>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
            </ul>`
    )
    console.log(resourceHTML)

//Bytte faner


//Filtrere info


function switchTab(){
    resourceHTML = ""
    resources.map((resource, index) => resourceHTML +=
        `<h2>${resources[index].category}</h2>
            <p>${resources[index].text}</p>
            <ul>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
            </ul>`
    )
    console.log(resourceHTML)
    document.getElementById("article").innerHTML = resourceHTML
}

document.getElementById("HTMLtab").innerHTML = headerHTML[0]
document.getElementById("CSStab").innerHTML = headerHTML[1]
document.getElementById("JStab").innerHTML = headerHTML[2]
document.getElementById("reacttab").innerHTML = headerHTML[3]
document.getElementById("sanitytab").innerHTML = headerHTML[4]
document.getElementById("article").innerHTML = resourceHTML

