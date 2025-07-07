// ==UserScript==
// @name         Twitter Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide promotional tweets on Twitter
// @author       You
// @match        *://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // X（旧Twitter）の広告ツイートを非表示にする
    function hideAds() {
        // 広告ラベルを持つspanを全て取得
        document.querySelectorAll('span.css-1jxf684').forEach(span => {
            if (span.innerText.trim() === 'Ad') {
                const article = span.closest('article');
                if (article) {
                    article.style.display = 'none';
                }
            }
        });
    }

    // ページ遷移や動的読み込みに対応
    const observer = new MutationObserver(hideAds);
    observer.observe(document.body, { childList: true, subtree: true });

    // 初回実行
    hideAds();
})();