document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    header.innerHTML = `
        <div class="header-content container">
            <h1 class="logo">
                <a href="https://www.rakuten.ne.jp/gold/platina-shop/">
                    <img src="image/logo_swe.svg" alt="健康食品・化粧品のサントリーウエルネス 楽天市場店">
                </a>
            </h1>
            <form class="search-form" method="get" action="https://esearch.rakuten.co.jp/rms/sd/esearch/vc" accept-charset="utf-8">
                <input type="hidden" name="sv" value="6">
                <input type="hidden" name="sid" value="247531">
                <input type="hidden" name="su" value="platina-shop">
                <input type="hidden" name="sn" value="プラチナＳＨＯＰ">
                <input type="text" name="sitem" placeholder="商品を検索する">
                <input type="hidden" name="f" value="A">
                <input type="submit" value="検索">
            </form>
        </div>
        <nav class="global-nav">
            <ul class="container">
                <li><a href="https://search.rakuten.co.jp/search/mall/?sid=247531">商品一覧</a></li>
                <li><a href="#">人気商品</a></li>
                <li><a href="#">お悩みから探す</a></li>
                <li><a href="#">定期商品</a></li>
            </ul>
        </nav>
    `;
});
