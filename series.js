document.addEventListener('DOMContentLoaded', function() {
    const series = document.getElementById('series');
    
    series.innerHTML = `
        <div class="container">
            <h2>シリーズ</h2>
            <div class="series-list">
                <div class="series-item">シリーズ1</div>
                <div class="series-item">シリーズ2</div>
                <div class="series-item">シリーズ3</div>
            </div>
        </div>
    `;
});