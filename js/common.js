'use strict';

function renderSiteColors() {
    var bgColor = loadFromStorage('bgcolor');
    if (bgColor) {
        setBodyColor(bgColor);
    }
    var fontColor = loadFromStorage('fontcolor');
    if (fontColor) {
        setFontColor(fontColor);
    }
}

function setBodyColor(color) {
    $('body').css('backgroundColor', color);
}

function setFontColor(color) {
    $('body').css('color', color);
}

