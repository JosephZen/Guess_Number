document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');

    if (!customCursor) {
        console.error("customCursor element not found!");
        return;
    }

    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    // Add spin animation on click
    document.addEventListener('click', () => {
        customCursor.classList.add('spin');
        setTimeout(() => {
            customCursor.classList.remove('spin');
        }, 500); // Ensure this matches the CSS animation duration
    });

    // Increase size when hovering over interactive elements
    const hoverElements = document.querySelectorAll("button, a, input"); // Add more if needed

    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            customCursor.classList.add('hovered');
        });

        element.addEventListener("mouseleave", () => {
            customCursor.classList.remove('hovered');
        });
    });
});
