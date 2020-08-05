'use strict';

var gForecasts = [{text: 'Your future is dark.'}, 
{text: 'Your day loooks bright.'},
{text: 'You could use a little help from yuor friends.'}];

function getRandomForecast(){
    return gForecasts[getRandomInt(0, gForecasts.length)];
}