/**
 * Created by Julia on 09.02.2016.
 */
///Создайте дату  20 февраля 2012 года, 3 часа 12 минут.
var date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//Имя дня недели
var date = new Date(2012, 0, 3);
function getWeekDay(date) {
    var week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return week[date.getDay()];
}

//День недели в европейской нумерации
function getLocalDay(date) {
    if (date.getDay() == 0) {
        return 7;
    }
    return date.getDay();
}

//День указанное количество дней назад
var date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}

//Последний день месяца?
function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

//Сколько секунд уже прошло сегодня?
function getSecondsToday() {
    var dateNow = new Date();
    var dateStart = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 0, 0, 0, 0);
    return Math.round((dateNow - dateStart) / 1000);
}

//Сколько секунд - до завтра?

function getSecondsToTomorrow() {
    var dateNow = new Date;
    var dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), (dateNow.getDate() + 1), 0, 0, 0, 0)
    return Math.round((dateTomorrow - dateNow) / 1000);
}

//Вывести дату в формате дд.мм.гг
function formatDate(date) {
    var searchDate = new Date(date);
    var options = {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    };
    return searchDate.toLocaleString("ru", options);
}

//Относительное форматирование даты
function formatDate(date){
    var passed = new Date() - date;
    if(Math.floor(passed/1000) < 1){
        return "только что";
    }
    else{
        if(Math.floor(passed/1000) < 60 ){
            return Math.floor(passed/1000) + ' сек. назад';
        }
        else if(Math.floor(passed /60000) < 60){
            return Math.floor(passed /60000) + ' мин. назад';
        }
        else{
            var searchDate = new Date(date);
            var options = {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            return searchDate.toLocaleString('ru',options).slice(0,8) + searchDate.toLocaleString('ru',options).slice(9,17);
        }
    }
}
