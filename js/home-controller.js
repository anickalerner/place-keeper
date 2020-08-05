'use strict';
$(document).ready(function () {
    renderSiteColors();
    showForecast();
});

function showForecast(){
    var dob = loadFromStorage('dob');
    var tob = loadFromStorage('tob');
    if (dob && tob) {
        var forecast = getRandomForecast();
        $(".forecast P").text(forecast.text);
    }
}
