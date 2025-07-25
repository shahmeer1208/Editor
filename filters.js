// Filter Presets
const filters = [
    { name: "Vintage", css: "sepia(0.5) contrast(1.2)", ffmpeg: "curves=r='0/0.11 0.5/0.48 1/0.89'" },
    { name: "Dramatic", css: "contrast(1.4) brightness(0.9)", ffmpeg: "colorbalance=rs=-0.3" },
    { name: "Cool", css: "hue-rotate(180deg)", ffmpeg: "colorbalance=rs=-0.2:bs=0.2" },
    // Add 47 more filters...
];

// Load Filters
function showFilters() {
    const panel = document.getElementById('filterPanel');
    panel.innerHTML = filters.map(filter => `
        <div class="filter" onclick="applyFilter('${filter.css}')">
            <img src="assets/filter-thumbs/${filter.name.toLowerCase()}.jpg" class="filter-thumb">
            <p>${filter.name}</p>
        </div>
    `).join('');
}
