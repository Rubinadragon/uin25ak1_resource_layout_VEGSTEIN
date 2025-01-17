//https://www.w3schools.com/howto/howto_js_tabs.asp
//https://stackoverflow.com/questions/10510063/javascript-object-reference-linked-to-object-in-array
//https://www.w3schools.com/howto/howto_js_active_element.asp
//https://stackoverflow.com/questions/72348956/how-to-map-through-a-deeply-nested-array-of-objects
//https://stackoverflow.com/questions/32141291/javascript-reflection-get-nested-objects-path
//https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time
//https://stackoverflow.com/questions/48707227/how-to-filter-a-javascript-map
//https://stackoverflow.com/questions/54723528/how-to-create-tabs-in-javascript

const html = document.getElementById("HTMLtab")
const css = document.getElementById("CSStab")
const js = document.getElementById("JStab")
const react = document.getElementById("reacttab")
const sanity = document.getElementById("sanitytab")
const header = document.getElementById("tabs")
const btn = header.getElementsByClassName("tab")

//console.log(btn)

/*html.addEventListener("click", switchTab)
css.addEventListener("click", switchTab)
js.addEventListener("click", switchTab)
react.addEventListener("click", switchTab)
sanity.addEventListener("click", switchTab)*/

//Headerprint
headerHTML = []

//Pushe headerelementer fra ressurser inn i resourceHTML
resources.forEach((object, index) => {
    headerHTML.push(object.category)
})
let resourceHTML = ""

//lagre <li>
let listElement = ""
//console.log(sources)
//Generere dynamisk mengde <li>
/*sources.map((source, index) => listElement +=
`<li>
    <a href="#">${resources[index].sources[index]}</a>
</li>`)*/


//Startfane
resources.map((resource, index) => resourceHTML +=
`<h2>${resources[index].category}</h2>
    <p>${resources[index].text}</p>
    <ul>
        ${listElement}
    </ul>`
)
//console.log(listElement)

//console.log(resourceHTML)

//Bytte faner
for(let teller = 0; teller < btn.length; teller++){
    btn[teller].addEventListener("click", function(){
        //Bytte farge på aktiv fane
        let activeTab = document.getElementsByClassName("active")
        activeTab[0].className = activeTab[0].className.replace(" active", "")
        this.className += " active"

        resourceHTML = ""
        //Filtrere info
        //Generere i forskjellige artikler?
        resources.map((resource, index) => resourceHTML +=
        `<h2>${resources[index].category}</h2>
            <p>${resources[index].text}</p>
            <ul>
            </ul>`
        )
        //console.log(btn[teller])
        document.getElementById("article").innerHTML = resourceHTML
    })
}



document.getElementById("HTMLtab").innerHTML = headerHTML[0]
document.getElementById("CSStab").innerHTML = headerHTML[1]
document.getElementById("JStab").innerHTML = headerHTML[2]
document.getElementById("reacttab").innerHTML = headerHTML[3]
document.getElementById("sanitytab").innerHTML = headerHTML[4]
document.getElementById("article").innerHTML = resourceHTML
