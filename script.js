document.addEventListener('DOMContentLoaded', () => {
    // Search functionality for tools
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const logoItems = document.querySelectorAll('.logo-item');
            logoItems.forEach(item => {
                const title = item.querySelector('p').textContent.toLowerCase();
                item.style.display = title.includes(query) ? 'block' : 'none';
            });
        });
    }

    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! Newsletter signup in progress.');
        });
    });
});
