'use strict';
$(document).ready(function () {
    addFormListeners();
    renderSiteColors();
});

function addFormListeners() {
    $("#bg-color")[0].addEventListener("input", function (colorPicker) { setBodyColor(event.target.value); }, false);
    $("#font-color")[0].addEventListener("input", function (colorPicker) { setFontColor(event.target.value); }, false);
    $("#dob")[0].addEventListener('change', saveDOB, false);
    $("#tob")[0].addEventListener('change', saveTOB, false);
}

function saveBackgroundColor(colorPicker) {
    saveToStorage('bgcolor', colorPicker.value);
}
function saveFontColor(colorPicker) {
    saveToStorage('fontcolor', colorPicker.value);
}
function saveDOB(event){
    saveToStorage('dob', event.target.value);
}

function saveTOB(event){
    saveToStorage('tob', event.target.value);
}
function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}