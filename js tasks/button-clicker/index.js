function changeText(e) {
    if (e.innerText == "Login") {
        e.innerText = "Logout";
    } else {
        e.innerText = "Login";
    }
}

function likeAlert() {
    alert("Ninja was liked");
}

function removeButton(e) {
    e.remove();
}