// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ページ読み込み完了時に実行される関数

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // トップに戻るボタン
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.setAttribute('aria-label', 'トップに戻る');
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // 遅延読み込み
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        lazyLoadObserver.observe(img);
    });

    // レスポンシブナビゲーション
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('.global-nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// ウィンドウのリサイズ時に実行される関数
window.addEventListener('resize', function() {
    // ここにリサイズ時の処理を記述
});

// スクロール時に実行される関数
window.addEventListener('scroll', function() {
    // ここにスクロール時の処理を記述
});