document.addEventListener("DOMContentLoaded", () => {
    const bioTextArea = document.getElementById("bio-text");

    // Function to update the textarea height and enforce word limit
    const updateBio = () => {
        // Split the text into words and limit to 40 words
        const words = bioTextArea.value.split(/\s+/).filter(Boolean);
        if (words.length > 40) {
            // Trim to 40 words and warn the user
            bioTextArea.value = words.slice(0, 40).join(" ") + " ";
            bioTextArea.classList.add("word-limit-exceeded");
        } else {
            bioTextArea.classList.remove("word-limit-exceeded");
        }

        // Adjust the height according to content
        bioTextArea.style.height = 'auto';
        bioTextArea.style.height = bioTextArea.scrollHeight + 'px';
    };

    bioTextArea.addEventListener("input", updateBio);
    bioTextArea.addEventListener("change", updateBio);

    // Initial adjustment
    updateBio();
});