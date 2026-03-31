const connectionRequests = [
    { name: "Todd E", image: "./images/todd-s.jpg" },
    { name: "Phil K", image: "./images/phil-s.jpg" },
];
connectionsLength = 500;

function renderRequests() {
    const container = document.querySelector("#requests_container");
    const requestsBadge = document.querySelector("#requests_badge");
    const connectionsBadge = document.querySelector("#connections_badge");


    container.innerHTML = "";
    requestsBadge.textContent = connectionRequests.length;
    connectionsBadge.textContent = connectionsLength + "+";

    if (connectionRequests.length === 0) {
        container.innerHTML = " there is no connection requests"
    }

    for (let i = 0; i < connectionRequests.length; i++) {
        const request = connectionRequests[i];

        const item = document.createElement("div");
        item.className = "connection-item";

        item.innerHTML = `
            <div class="user-info">
                <img src="${request.image}" alt="${request.name}" class="user-avatar">
                <span>${request.name}</span>
            </div>
            <div>
                <img src="./icons/accept-circle.png" alt="accept" class="action-icon" onclick="acceptConnection(${i})">
                <img src="./icons/close-circle.png" alt="decline" class="action-icon" onclick="declineConnection(${i})">
            </div>
        `;

        container.appendChild(item);
    }
}



function acceptConnection(index) {
    connectionRequests.splice(index, 1);
    connectionsLength++;
    renderRequests();
}

function declineConnection(index) {
    connectionRequests.splice(index, 1);
    renderRequests();
}

function editProfile(e) {
    let title = document.querySelector("#title");
    title.innerHTML = "Not Mahmoud Abusamaan"

}
renderRequests();
