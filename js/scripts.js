var leapYear = function(year) {
    if (year % 4 === 0) {
      return true;
    } else if (year % 4 === 0){
      return true;
    } else {
      return false
    }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("Input#year").val());
    var result = leapYear (year);
    $("#result").text(result);
  });
});
