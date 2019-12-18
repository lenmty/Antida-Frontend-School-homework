// Не изменяя код ниже сделать так, чтобы иногда он мог возвращать Strange day.

var weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function myGetDay() {
  var date = new Date();
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}

// solution below

Date.prototype.getDay = (function(){
  let originGetDay = new Date().getDay;
  return function() {
    let noise = Math.floor(Math.random() * 2) * 7;  // returns 0 or 7
    return noise || originGetDay.call(this);  // 0 --> originGetDay, 7 --> index out of array returns "Strange day"
    };
})();