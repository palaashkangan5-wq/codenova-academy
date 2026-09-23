document.querySelector("button").addEventListener("click", function () {
    alert("Welcome to CodeNova Academy! 🚀");
});
function showFundingMessage() {
    document.getElementById("fundingMessage").textContent =
        "Thank you for your interest! Your funding application section is ready.";
}const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const course = document.getElementById("courseSelect").value;

    document.getElementById("registrationMessage").textContent =
        "Thank you, " + name + "! Your interest in the " + course + " course has been registered. 🚀";

    registrationForm.reset();
});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value;

        document.getElementById("contactMessageStatus").textContent =
            "Thank you, " + name + "! Your message has been received. 📩";

        contactForm.reset();
    });
}