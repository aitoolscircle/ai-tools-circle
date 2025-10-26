document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const toolItems = document.querySelectorAll('.tool-item');
            toolItems.forEach(item => {
                const title = item.querySelector('h4 a').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                item.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
            });
        });
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! Functionality to be implemented.');
        });
    });
});
