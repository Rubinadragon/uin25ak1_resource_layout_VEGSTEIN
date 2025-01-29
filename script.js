const header = document.getElementById("tabs")
const btn = header.getElementsByClassName("tab")

//Headerprint
let headerHTML = []

//Pushe headerelementer fra ressurser inn i resourceHTML, opprinnnelig forEach, men studentassistent foreslo map isteden.
resources.map((header)=>{
    headerHTML.push(header.category)
})
let resourceHTML = ""

//lagre <li>
let listElement = ""

//Generere dynamisk mengde <li>
//Alle instanser av map og filter-kombo basert på første forslag fra denne siden: 
//https://stackoverflow.com/questions/70894999/using-map-and-filter-at-the-same-time-in-javascript
/*I tillegg gikk noe hjelp fra chatGPT med syntaksen, det jeg endte med å bruke derfra var å flytte source inni map og legge til krøllparenteser etter arrowfunksjonen til map. 
Lenken til chatten er en ny chat, men opprinnelig ble det skrevet inn i en eldre chat fra tidligere semestere,
så da kopierte jeg inn det jeg hadde skrevet inn i den forrige chatten i den nye, for at det jeg skrev i andre oppgaver ikke skulle bli blandet med det jeg skrev i denne.
Lenke til chatten her: https://chatgpt.com/share/679a61c0-d324-8006-87ad-2e89a2878115
// Den gamle chatten er her, men jeg har ikke tatt i bruk noe annet enn det jeg nevnte tidligere, selv om jeg også har spurt den om flere ting senere:
//  https://chatgpt.com/c/6707a71d-adb0-8006-8e83-aa4342ab7df7*/
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
        /*Tre linjer under og for-løkken sammen med btn basert på denne koden: 
        https://www.w3schools.com/howto/howto_js_active_element.asp*/
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
        
}

/*Skrive ut, foreleser foreslo .map på tabs.
Syntaks på alt etter arrowfunksjonen basert på forslag fra denne siden: 
https://stackoverflow.com/questions/17896746/document-getelementsbyclassname-innerhtml-always-returns-undefined*/
resources.map((header, index) => btn[index].innerHTML = headerHTML[index])
document.getElementById("article").innerHTML = resourceHTML