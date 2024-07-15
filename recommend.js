document.addEventListener('DOMContentLoaded', function() {
    const recommend = document.getElementById('recommend');
    
    recommend.innerHTML = `
        <div class="container">
            <h2>おすすめ商品</h2>
            <div class="recommend-list">
                <div class="recommend-item">おすすめ商品1</div>
                <div class="recommend-item">おすすめ商品2</div>
                <div class="recommend-item">おすすめ商品3</div>
                <div class="recommend-item">おすすめ商品4</div>
            </div>
        </div>
    `;
});