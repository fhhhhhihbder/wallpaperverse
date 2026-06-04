document.addEventListener('DOMContentLoaded', () => {
    const deviceButtons = document.querySelectorAll('.filter-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const wallpaperCards = document.querySelectorAll('.wallpaper-card');

    let activeDevice = 'all';
    let activeTheme = 'all';

    // Device Filter Click Event
    deviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            deviceButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeDevice = button.getAttribute('data-device');
            filterWallpapers();
        });
    });

    // Theme Filter Click Event
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            themeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeTheme = button.getAttribute('data-theme');
            filterWallpapers();
        });
    });

    // Main Dual Filtering Function
    function filterWallpapers() {
        wallpaperCards.forEach(card => {
            const cardDevice = card.getAttribute('data-device');
            const cardTheme = card.getAttribute('data-theme');

            const matchesDevice = (activeDevice === 'all' || cardDevice === activeDevice);
            const matchesTheme = (activeTheme === 'all' || cardTheme === activeTheme);

            if (matchesDevice && matchesTheme) {
                card.style.display = 'block';
                setTimeout(() => { card.style.opacity = '1'; }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }
});
