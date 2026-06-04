document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Sirf us section ke buttons se active class hatao jiska button daba hai
        const type = button.dataset.type;
        document.querySelectorAll(`.filter-btn[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
        
        // Current button ko active karo
        button.classList.add('active');

        // Smart Filtering apply karo
        applyMultiFilters();
    });
});

function applyMultiFilters() {
    // Teeno active filter values ko read karo
    const activeDevice = document.querySelector('.filter-btn[data-type="device"].active').dataset.value;
    const activePrice = document.querySelector('.filter-btn[data-type="price"].active').dataset.value;
    const activeTheme = document.querySelector('.filter-btn[data-type="theme"].active').dataset.value;

    document.querySelectorAll('.wallpaper-card').forEach(card => {
        // Condition check karein
        const matchDevice = activeDevice === 'all' || card.dataset.device === activeDevice;
        const matchPrice = activePrice === 'all' || card.dataset.price === activePrice;
        const matchTheme = activeTheme === 'all' || card.dataset.theme === activeTheme;

        // Agar card teeno conditions par sahi utarta hai toh dikhao, varna chhupao
        if (matchDevice && matchPrice && matchTheme) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
