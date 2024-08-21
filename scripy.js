document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('li');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-in-out forwards';
            }
        });
    });

    items.forEach(item => {
        item.style.opacity = 0;
        observer.observe(item);
    });
});
