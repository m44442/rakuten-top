document.addEventListener('DOMContentLoaded', function() {
    const pickup = document.getElementById('pickup');
    
    pickup.innerHTML = `
        <div class="container">
            <h2>ピックアップ</h2>
            <div class="pickup-list">
                <div class="pickup-item">ピックアップ1</div>
                <div class="pickup-item">ピックアップ2</div>
                <div class="pickup-item">ピックアップ3</div>
                <div class="pickup-item">ピックアップ4</div>
            </div>
        </div>
    `;
});
