const inputfield = document.getElementById("inputField")
const btn = document.getElementById("btn")
const todos = document.getElementById("todocontainer")
btn.addEventListener("click", () =>{
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputfield.value
    inputfield.value = ""
    todocontainer.appendChild(paragraph)
    
    paragraph.addEventListener("click", () =>{
        paragraph.style.textDecoration = "line-through";
        
    })
    paragraph.addEventListener("copy", () =>{
        todocontainer.removeChild(paragraph)
        
    })
    
})


