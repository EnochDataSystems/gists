// ==UserScript==
// @name         Magento2 Admin systemMessageBlock Fix
// @namespace    https://data.enoch.systems/
// @version      0.1
// @description  Tamper Monkey script that prevents the systemMessageBlock in the M2 admin from pushing down elements in the page
// @author       Enoch Data Systems
// @match        http*://your.domain.com/path_to/admin/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(".notices-wrapper {position: absolute;width: 35%;}");
GM_addStyle(".message {font-size: 1.2rem;}");
GM_addStyle(".message-system-action-dropdown {display:none}");
GM_addStyle(".message-system-short-wrapper {padding:0 .5rem 0 .5rem;}");
GM_addStyle(".message-system-inner .message {padding:1rem 0 1rem 3.3rem;}");
GM_addStyle("#system_messages{\
    position: relative;\
    z-index: 1;\
    opacity: .9;\
    animation:system_messages ease-in 0.5s 1;\
    -webkit-animation:system_messages ease-in 0.5s 1;\
    animation-fill-mode: forwards;\
    animation-delay:5s;\
    -webkit-animation-delay:5s; \
    -webkit-animation-fill-mode: forwards;\
}\
@-webkit-keyframes system_messages{\
    from { opacity: .9; }\
    to   { opacity: 0; }\
}")
