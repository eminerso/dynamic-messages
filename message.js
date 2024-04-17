var add = document.getElementById("add")
var box = document.getElementById("box")



add.addEventListener("click",()=>{
var color= "rgb(" + Math.floor(Math.random() * 255)+ "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ")";

    var message=document.createElement("div")
    message.classList.add("messages")
    box.append(message)
    message.style.backgroundColor=color
    
    var row = box.querySelectorAll("div").length
    message.textContent= `Message ${row}`

    setTimeout(()=>{ message.remove() },7000)
    
})


