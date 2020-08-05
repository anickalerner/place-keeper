'use strict';
const  SITEPREF = 'html5-proj';

function saveToStorage(key, val) {
    localStorage.setItem(SITEPREF + key, JSON.stringify(val));
}

function loadFromStorage(key) {
    var val = localStorage.getItem(SITEPREF + key)
    return JSON.parse(val);
}