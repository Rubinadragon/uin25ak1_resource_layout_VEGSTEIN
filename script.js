//https://stackoverflow.com/questions/44062723/mapping-an-object-and-then-setting-innerhtml-on-the-page-results-in-commas-betwe
const header = document.getElementById("tabs")
const btn = header.getElementsByClassName("tab")

//Headerprint
//Studentassistent foreslo å bytte ut individuelle getElementById med map
let headerHTML = []
resources.map((header)=>{
    headerHTML += header.category
})

//Pushe headerelementer fra ressurser inn i resourceHTML
/*resources.forEach((object, index) => {
    headerHTML.push(object.category)
})*/
let resourceHTML = ""

//lagre <li>
let listElement = ""

//Generere dynamisk mengde <li>
//Alle instanser av map og filter-kombo basert på første forslag fra denne siden: //https://stackoverflow.com/questions/70894999/using-map-and-filter-at-the-same-time-in-javascript
resources.filter((source, index) => index === 0).map((resource) => 
    resource.sources.map((source) => {listElement += 
    `<li>
        <a href="${source.url}">${source.title}</a>
    </li>`
}))

//Startfane
resources.filter((resource, index) => index === 0).map((resource, index) => resourceHTML +=
`<h2>${resources[index].category}</h2>
    <p>${resources[index].text}</p>
    <ul>
        ${listElement}
    </ul>`
)

//Bytte faner
for(let teller = 0; teller < btn.length; teller++){
    btn[teller].addEventListener("click", function(){
        //Bytte farge på aktiv fane
        //Tre linjer under og for-løkken sammen med btn basert på denne koden: https://www.w3schools.com/howto/howto_js_active_element.asp
        let activeTab = document.getElementsByClassName("active")
        activeTab[0].className = activeTab[0].className.replace(" active", "")
        this.className += " active"

        let listElement = ""

        resources.filter((source, index) => index === teller).map((resource) => 
            resource.sources.map((source) => {listElement += 
            `<li>
                <a href="${source.url}">${source.title}</a>
            </li>`
        }))

        //Filtrere info
        resources.filter((resource, index) => index === teller).map((resource, index) => resourceHTML =
        `<h2>${resources[teller].category}</h2>
            <p>${resources[teller].text}</p>
            <ul>
                ${listElement}
            </ul>`
        )
        document.getElementById("article").innerHTML = resourceHTML
    })
    btn.innerHTML = headerHTML[teller]
}

document.getElementById("article").innerHTML = resourceHTML