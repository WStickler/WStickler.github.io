// JavaScript source code

//methods
function greeting() {
    window.alert("Good morning!")
    // This gets the header 1 by it's ID and replaces the text.
    document.getElementById("greeting").innerHTML = "And if I don't see ya"
    console.log("Good afternoon, good evening and good night")
}

function changeText() {
    //console.log("I'm over the element.")

    let para = document.getElementById("new-para")

    if (para) {
        para.remove()
    } else {
        para = document.createElement("p")
        para.id = "new-para"
        let textNode = document.createTextNode(actor.getFullName())
        para.appendChild(textNode)
        document.getElementById("title-container").appendChild(para)
    }

}

//variables
// Var is hoisted, meaning under the hood it gets moved to the top of the script of sorts.
var title = "The Truman Show"

let director = "Peter Weir"
const releaseYear = 1998

//arrays and objects
//arrays are resizable in JS and can have different types in different indexes.
const characters = []

characters.push("Truman Burbank")

//objects
// These are just Key/Value pairs
const actor = {}

actor.firstName = "Jim"
actor.lastName = "Carrey"
actor.getFullName = function () {
    return this.firstName + " " + this.lastName
}

// You can also do all of the above like this and all would still be attatched to the object:
const actress = {
    firstName: "Laura",
    lastName: "Linney",
    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

console.log(actor.getFullName())