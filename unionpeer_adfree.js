// ==UserScript==
// @namespace         https://4song.cn
// @name              unionpeer adfree
// @description       remove the ad from unionpeer.org
// @include           http*://*unionpeer.org/*
// @homepageURL       https://4song.cn
// @supportURL        https://4song.cn
// @version           1.1
// ==/UserScript==

window.addEventListener('load', function() {
    var ad1 = document.getElementsByTagName("div")[0];
    var ad2 = document.getElementById("b_bn_165");
    if(ad1||ad2){
        ad1.style.display="none";
        ad2.style.display="none";
    }
    console.log('Window onload event fired!');
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var ad1 = document.getElementsByTagName("div")[0];
    var ad2 = document.getElementById("b_bn_165");
    if(ad1||ad2){
        ad1.style.display="none";
        ad2.style.display="none";
    }
  console.log('Document load event fired!');
}, false);
