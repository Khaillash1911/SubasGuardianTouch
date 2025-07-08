document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>© 2023 Gentle Touch. All rights reserved.</p>';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.right = '0';
    footer.style.backgroundColor = 'black';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.display = 'none'; // Initially hidden

    document.body.appendChild(footer);

    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.style.display = 'block'; // Show footer when scrolled to bottom
        } else {
            footer.style.display = 'none'; // Hide footer otherwise
        }
    });

    // Navigation functionality
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage; // Navigate to the selected page
        });
    });
});