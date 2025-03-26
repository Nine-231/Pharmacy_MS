document.addEventListener("DOMContentLoaded", loadContainers);

function addContainer() {
    let newDiv = document.createElement("div");
    newDiv.className = "container";
    newDiv.innerHTML = "<p>New Container Box</p> <button class='remove-btn' onclick='removeContainer(this)'>Remove</button>";

    document.getElementById("container-wrapper").appendChild(newDiv);
    
    saveContainers();
}

function removeContainer(button) {
    button.parentElement.remove();
    saveContainers();
}

function saveContainers() {
    let containers = [];
    document.querySelectorAll(".container").forEach(container => {
        containers.push(container.innerHTML);
    });

    localStorage.setItem("containers", JSON.stringify(containers));
}

function loadContainers() {
    let storedContainers = JSON.parse(localStorage.getItem("containers"));
    if (storedContainers) {
        storedContainers.forEach(content => {
            let newDiv = document.createElement("div");
            newDiv.className = "container";
            newDiv.innerHTML = content;
            document.getElementById("container-wrapper").appendChild(newDiv);
        });
    }
}

