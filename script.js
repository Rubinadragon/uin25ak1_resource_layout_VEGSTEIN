//Skal man ha to separate javascriptfiler?
//https://www.w3schools.com/howto/howto_js_tabs.asp
//https://stackoverflow.com/questions/10510063/javascript-object-reference-linked-to-object-in-array
//https://www.w3schools.com/howto/howto_js_active_element.asp

const tabcontainer = document.getElementById("tabs")
/*const html = document.getElementById("HTMLtab")
const css = document.getElementById("CSStab")
const js = document.getElementById("JStab")
const react = document.getElementById("reacttab")
const sanity = document.getElementById("sanitytab")

html.addEventListener("click", switchTab)
css.addEventListener("click", switchTab)
js.addEventListener("click", switchTab)
react.addEventListener("click", switchTab)
sanity.addEventListener("click", switchTab)*/

const tabs = document.getElementsByClassName("tab")

let resourceHTML = ""

function switchTab(){
    console.log("!")
    /*resources.map((resource, index) => resourceHTML +=
    `<h2>${resources.title}</h2>
        <p>${resources.text}</p>
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
    )*/
}

document.getElementById("article").innerHTML = resourceHTML