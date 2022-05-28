let timeDisplayEl = $('#time-display');
let atomicTime = moment();
let atomic = atomicTime.toString();
let times = ['09:00am', '10:00am', '11:00am', '12:00pm', '01:00pm', '02:00pm', '03:00pm', '04:00pm', '05:00pm'];
let hourInteger = moment().format('H');
let time_9 = 9;
let time_10 = 10;
let time_11 = 11;
let time_12 = 12;
let time_13 = 13;
let time_14 = 14;
let time_15 = 15;
let time_16 = 16;
let time_17 = 17;

function displayTime() {
  let rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

const timeCheck = function() {
  for (let i = 0; i < 9; i++) {
    let startTime = moment(times[i], "HH:mma");
    console.log(startTime.toString());
    let start = startTime.toString();
    console.log(atomic > start);
    console.log(atomic < start);
    console.log(atomic == start);
    if (atomic > start) {
      $(".scheduler-container").children().eq(i + 1).children().eq(1).addClass("past");
    } else if (atomic < start) {
      $(".scheduler-container").children().eq(i + 1).children().eq(1).addClass("future");
    }
    //$(".scheduler-container").children().eq(i + 1).children().eq(1).addClass("present");}
  }
}
timeCheck();

if (hourInteger == time_9) {
  $(".scheduler-container").children().eq(1).children().eq(1).addClass("present");
} else if (hourInteger == time_10) {
  $(".scheduler-container").children().eq(2).children().eq(1).addClass("present");
} else if (hourInteger == time_11) {
  $(".scheduler-container").children().eq(3).children().eq(1).addClass("present");
} else if (hourInteger == time_12) {
  $(".scheduler-container").children().eq(4).children().eq(1).addClass("present");
} else if (hourInteger == time_13) {
  $(".scheduler-container").children().eq(5).children().eq(1).addClass("present");
} else if (hourInteger == time_14) {
  $(".scheduler-container").children().eq(6).children().eq(1).addClass("present");
} else if (hourInteger == time_15) {
  $(".scheduler-container").children().eq(7).children().eq(1).addClass("present");
} else if (hourInteger == time_16) {
  $(".scheduler-container").children().eq(8).children().eq(1).addClass("present");
} else if (hourInteger == time_17) {
  $(".scheduler-container").children().eq(9).children().eq(1).addClass("present");
}

$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    console.log(this);
    let eventDesc = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    let time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
    localStorage.setItem(time, eventDesc);
  })

  $("#9am-block .description").val(localStorage.getItem("9am-block"));
  $("#10am-block .description").val(localStorage.getItem("10am-block"));
  $("#11am-block .description").val(localStorage.getItem("11am-block"));
  $("#12pm-block .description").val(localStorage.getItem("12pm-block"));
  $("#1pm-block .description").val(localStorage.getItem("1pm-block"));
  $("#2pm-block .description").val(localStorage.getItem("2pm-block"));
  $("#3pm-block .description").val(localStorage.getItem("3pm-block"));
  $("#4pm-block .description").val(localStorage.getItem("4pm-block"));
  $("#5pm-block .description").val(localStorage.getItem("5pm-block"));
})
