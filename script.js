// script.js
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header');
    loadComponent('main-visual');
    loadComponent('recommend');
    loadComponent('ranking');
    loadComponent('pickup');
    loadComponent('category');
    loadComponent('series');
    loadComponent('footer');

    // その他の共通機能
    setupSmoothScroll();
    setupScrollToTopButton();
    setupLazyLoading();
    setupResponsiveNavigation();
});

function loadComponent(name) {
    fetch(`js/${name}.js`)
        .then(response => response.text())
        .then(data => {
            const script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        })
        .catch(error => console.error(`Error loading ${name} component:`, error));
}

function setupSmoothScroll() {
    // スムーズスクロールの実装
}

function setupScrollToTopButton() {
    // トップに戻るボタンの実装
}

function setupLazyLoading() {
    // 遅延読み込みの実装
}

function setupResponsiveNavigation() {
    // レスポンシブナビゲーションの実装
}

// その他の共通機能の実装