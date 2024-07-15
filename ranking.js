document.addEventListener('DOMContentLoaded', function() {
    const ranking = document.getElementById('ranking');
    
    ranking.innerHTML = `
        <div class="container">
            <h2>人気ランキング</h2>
            <div class="ranking-list">
                <div class="ranking-item">ランキング1位</div>
                <div class="ranking-item">ランキング2位</div>
                <div class="ranking-item">ランキング3位</div>
                <div class="ranking-item">ランキング4位</div>
                <div class="ranking-item">ランキング5位</div>
            </div>
        </div>
    `;
});

