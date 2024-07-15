document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>ショップ情報</h3>
                    <ul>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">お支払い方法</a></li>
                        <li><a href="#">配送方法</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>カスタマーサポート</h3>
                    <ul>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">返品・交換について</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>SNS</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 プラチナＳＨＯＰ All Rights Reserved.</p>
            </div>
        </div>
    `;
});