function changeText(e) {
    if (e.innerText == "Login") {
        e.innerText = "Logout";
        e.style.backgroundColor = "red";
    } else {
        e.innerText = "Login";
        e.style.backgroundColor = "#2b78e4";
    }
}

function likeAlert() {
    alert("Ninja was liked");
}

function removeButton(e) {
    e.remove();
}