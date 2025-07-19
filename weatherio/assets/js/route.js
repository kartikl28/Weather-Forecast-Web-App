

'use strict';
import {updateWeather, error404} from "./app.js";
const defaultLocation ="#/weather?lat=51.5073219&lon=-0.1276474" //london

const currentLoaction = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude} = res.coords;
        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },err => {
        window.location.hash = defaultLocation;

    });

}
/**
 * @param {string}query searched query
 */
const searchedLoaction = query => updateWeather(...query.split("&"));

const routes =new Map([
    ["/current-location",currentLoaction],
    ["/weather",searchedLoaction]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];
    route.get(route) ? routes.get(route)(query) : error404();
}
window.addEventListener("hashchange", checkHash);
window.addEventListener("laod", function() {
    if (!window.location.hash) {
        window.location.hash = "/#current-location"
    }else {
        checkHash();
    }
});
