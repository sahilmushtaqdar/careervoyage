document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to CareerVoyage! Explore your dream career.");
});
function searchCourse() {
    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search === "tourism") {
        alert("Tourism & Hospitality course is available!");
    } else if (search === "technology") {
        alert("Technology course is available!");
    } else if (search === "business") {
        alert("Business Management course is available!");
    } else if (search === "web development") {
        alert("Web Development course is available!");
    } else {
        alert("Sorry! Course not found.");
    }
}
