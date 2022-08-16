const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    container.classList.toggle("active2")
    btn.classList.toggle("active")
    if (container.classList.contains("active2") && btn.classList.contains("active")) {
        localStorage.setItem("mode", "true")
    }
    else {
        localStorage.setItem("mode", "false")
    }
})

if (localStorage.getItem("mode") === "true") {
    container.classList.add("active2");
    btn.classList.add("active");
}
if (localStorage.getItem("mode") === "false") {
    container.classList.remove("active2");
    btn.classList.remove("active");
}



