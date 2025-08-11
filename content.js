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

    // Hide promoted tweets on X
    function hideAds() {
        document.querySelectorAll('span.css-1jxf684').forEach(span => {
            if (span.innerText.trim() === 'Ad') {
                const article = span.closest('article');
                if (article) {
                    article.style.display = 'none';
                }
            }
        });
    }

    // Support page transitions and dynamic loading
    const observer = new MutationObserver(hideAds);
    observer.observe(document.body, { childList: true, subtree: true });

    // First run 
    hideAds();
})();