var today = new Date(); 
var ny = new Date("January 1, 2023 00:00:00");
var day = 24*60*60*1000;

var daysLeft = Math.round((ny.getTime() - today.getTime())/day);
var days = new Date(Math.abs(today.getTime() - ny.getTime()));

console.log('Осталось ' + daysLeft + ' дней, ' + `${days.getUTCHours()}` + " часов, " + `${days.getMinutes()}` + " минут, " + `${days.getSeconds()}` + " секунд до Нового года.")