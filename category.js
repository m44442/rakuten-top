document.addEventListener('DOMContentLoaded', function() {
    const category = document.getElementById('category');
    
    category.innerHTML = `
        <div class="container">
            <h2>カテゴリー</h2>
            <div class="category-list">
                <div class="category-item">カテゴリー1</div>
                <div class="category-item">カテゴリー2</div>
                <div class="category-item">カテゴリー3</div>
                <div class="category-item">カテゴリー4</div>
            </div>
        </div>
    `;
});