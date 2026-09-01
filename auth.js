const currentUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const currentUser =
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        window.location.href = "index.html";
        return;
    }

    const userEl = document.getElementById("loggedUser");
    const roleEl = document.getElementById("loggedRole");

    if (userEl) {
        userEl.textContent = currentUser.username;
    }

    if (roleEl) {
        roleEl.textContent = currentUser.role;
    }

});
