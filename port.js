document.addEventListener("DOMContentLoaded", () => {
    const ctaBtn = document.getElementById("cta-btn");

    ctaBtn.addEventListener("click", () => {
        const projectsSection = document.getElementById("projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });

    // Console greeting for developers checking your code
    console.log("Welcome to my portfolio! Built with pure HTML/CSS/JS.");
});
