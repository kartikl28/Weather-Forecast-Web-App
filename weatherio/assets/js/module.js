

'use strict';
export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix Unix date in second 
 * @param {number} timezone Timezone shift form UT in second
 * @retruns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayNames = weekDayNames[date.getUTCDay()];
    const monthNames = monthNames[date.getUTCMonth()];

    retrun `${weekDayNames} ${date.getUTCDate()}, ${monthNames}`;

}
/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in second
 * @returns {string} Time string formate :"HH:MM AM/PM"
 */
export const getTime =function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${period}`;


}
/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in second
 * @returns {string} Time string formate :"HH AM/PM"
 */
export const getHours =function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}`;


}
/**
 * 
 * @param {number} mps meter per secconds
 * @returns {number} kilometer per second
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;

}

export const aqiText ={
    1: {
        level: "Good",
        message: "Air Quality is considered satisfactory and air pollution poses little or no risk"
    },
    2: {
        level:"Fair",
        message:"Air quality is acceptable however for some pollutants there may be a moderate health concern"

    },
    3: {
        level:"Moderate",
        message:"Senstive Members may experience health effects."
    },
    4: {
        level:"Poor",
        message:"Everyone may begin to experience healt effects."

    },
    5:{
        level:"Very Poor",
        message:"Health warning of mergency conditons"
    }
}