const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
})

addBook.addEventListener("click", () => {
    modal.showModal();
})

document.addEventListener("click", (e) => {
    if(e.target.className === "modal") {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
            modal.close();
        }, {once: true});
    }
})