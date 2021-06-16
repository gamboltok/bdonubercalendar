'use strict';

const nuber = {
    "":"",
        "ponedelnik": {
            "id": 1,
            "time1": "01:00",
            "time2": "14:00",
            "time3": "23:00"
        },
        "vtornik": {
            "id": "",
            "time1": ""
        },
        "sreda": {
            "id": 3,
            "time1": "13:00",
            "time2": "16:00"
        },
        "chetverg": {
            "id": 4,
            "time1": "12:00",
            "time2": "16:00"
        },
        "pjatnica": {
            "id": 5,
            "time1": "00:01",
            "time2": "16:00"
        },
        "subbota": {
            "id": 6,
            "time1": "00:01"
        },
        "voskresenje": {
            "id": 7,
            "time1": "18:00"
        }
};

const date = new Date();
let day = date.getDay(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds();
  
const dateArray = new Date().toLocaleString().split(',');
const shortDateDMY = dateArray[0].toString().split('.');
const shortTimeHMS = dateArray[1].toString().split(':');
const nuberJSON = JSON.parse(JSON.stringify(nuber));
const nuberArray = Object.entries(nuberJSON);

shortTimeHMS[0] = shortTimeHMS[0].trim();

function parseRealTimeNow(){
    if(minute < 10){
        minute = '0' + minute;
    }else{
        minute = date.getMinutes();
    }
    return hour + ':' + minute;
}

function checkNuberArray(){
    nuberArray.forEach((value, key) => {
        if(day == nuberArray[key][1].id && parseRealTimeNow() == nuberArray[key][1].time1 ||
          day == nuberArray[key][1].id && parseRealTimeNow() == nuberArray[key][1].time2 ||
          day == nuberArray[key][1].id && parseRealTimeNow() == nuberArray[key][1].time3){
            console.log('ok');
        }else{
            console.log(`not ok`);
        }
    });
}

const timer = setInterval(() => {
    checkNuberArray();
}, 1000);